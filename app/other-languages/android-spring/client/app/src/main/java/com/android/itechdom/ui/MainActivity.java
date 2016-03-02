

package com.android.itechdom.ui;

import android.accounts.OperationCanceledException;


import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;

import android.support.v4.app.FragmentManager;

import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;

import com.android.itechdom.BootstrapApplication;
import com.android.itechdom.BootstrapComponent;
import com.android.itechdom.BootstrapServiceProvider;
import com.android.itechdom.R;
import com.android.itechdom.core.BootstrapService;
import com.android.itechdom.events.NavItemSelectedEvent;
import com.android.itechdom.util.SafeAsyncTask;
import com.android.itechdom.util.UIUtils;
import com.squareup.otto.Subscribe;

import javax.inject.Inject;

import butterknife.ButterKnife;
import timber.log.Timber;


/**
 * Initial activity for the application.
 *
 * If you need to remove the authentication from the application please see
 * {@link com.android.itechdom.authenticator.ApiKeyProvider#getAuthKey(android.app.Activity)}
 */
public class MainActivity extends BootstrapActivity {

    @Inject BootstrapServiceProvider serviceProvider;

    private boolean userHasAuthenticated = false;

    private DrawerLayout drawerLayout;
    private ActionBarDrawerToggle drawerToggle;
    private CharSequence drawerTitle;
    private CharSequence title;
    private NavigationDrawerFragment navigationDrawerFragment;

    @Override
    protected void onCreate(final Bundle savedInstanceState) {

        requestWindowFeature(Window.FEATURE_INDETERMINATE_PROGRESS);

        super.onCreate(savedInstanceState);
        BootstrapApplication.component().inject(this);

        if(isTablet()) {
            setContentView(R.layout.main_activity_tablet);
        } else {
            setContentView(R.layout.main_activity);
        }

        // View injection with Butterknife
        ButterKnife.bind(this);

        // Set up navigation drawer
        title = drawerTitle = getTitle();

        if(!isTablet()) {
            drawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);
            drawerToggle = new ActionBarDrawerToggle(
                    this,                    /* Host activity */
                    drawerLayout,           /* DrawerLayout object */
                    R.string.navigation_drawer_open,    /* "open drawer" description */
                    R.string.navigation_drawer_close) { /* "close drawer" description */

                /** Called when a drawer has settled in a completely closed state. */
                public void onDrawerClosed(View view) {
                    getSupportActionBar().setTitle(title);
                    invalidateOptionsMenu(); // creates call to onPrepareOptionsMenu()
                    syncState();
                }

                /** Called when a drawer has settled in a completely open state. */
                public void onDrawerOpened(View drawerView) {
                    getSupportActionBar().setTitle(drawerTitle);
                    invalidateOptionsMenu(); // creates call to onPrepareOptionsMenu()
                    syncState();
                }
            };

            if(!isTablet()) {
                drawerToggle.syncState();
            }

            // Set the drawer toggle as the DrawerListener
            drawerLayout.setDrawerListener(drawerToggle);

            navigationDrawerFragment = (NavigationDrawerFragment)
                    getSupportFragmentManager().findFragmentById(R.id.navigation_drawer);

            // Set up the drawer.
            navigationDrawerFragment.setUp(
                    R.id.navigation_drawer,
                    (DrawerLayout) findViewById(R.id.drawer_layout));
        }


        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);


        checkAuth();

    }

    private boolean isTablet() {
        return UIUtils.isTablet(this);
    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if(!isTablet()) {
            drawerToggle.onConfigurationChanged(newConfig);
        }
    }


    private void initScreen() {
        if (userHasAuthenticated) {

            final FragmentManager fragmentManager = getSupportFragmentManager();
            fragmentManager.beginTransaction()
                    .replace(R.id.container, new CarouselFragment())
                    .commit();
        }

    }

    private void checkAuth() {
        new SafeAsyncTask<Boolean>() {

            @Override
            public Boolean call() throws Exception {
                final BootstrapService svc = serviceProvider.getService(MainActivity.this);
                return svc != null;
            }

            @Override
            protected void onException(final Exception e) throws RuntimeException {
                super.onException(e);
                if (e instanceof OperationCanceledException) {
                    // User cancelled the authentication process (back button, etc).
                    // Since auth could not take place, lets finish this activity.
                    finish();
                }
            }

            @Override
            protected void onSuccess(final Boolean hasAuthenticated) throws Exception {
                super.onSuccess(hasAuthenticated);
                userHasAuthenticated = true;
                initScreen();
            }
        }.execute();
    }

    @Override
    public boolean onOptionsItemSelected(final MenuItem item) {

        if (!isTablet() && drawerToggle.onOptionsItemSelected(item)) {
            return true;
        }

        switch (item.getItemId()) {
            case android.R.id.home:
                //menuDrawer.toggleMenu();
                return true;
            case R.id.timer:
                navigateToTimer();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    private void navigateToTimer() {
        final Intent i = new Intent(this, BootstrapTimerActivity.class);
        startActivity(i);
    }

    @Subscribe
    public void onNavigationItemSelected(NavItemSelectedEvent event) {

        Timber.d("Selected: %1$s", event.getItemPosition());

        switch(event.getItemPosition()) {
            case 0:
                // Home
                // do nothing as we're already on the home screen.
                break;
            case 1:
                // Timer
                navigateToTimer();
                break;
        }
    }
}
