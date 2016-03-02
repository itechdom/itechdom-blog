package com.android.itechdom;

import com.android.itechdom.authenticator.BootstrapAuthenticatorActivity;
import com.android.itechdom.core.TimerService;
import com.android.itechdom.ui.BootstrapActivity;
import com.android.itechdom.ui.BootstrapFragmentActivity;
import com.android.itechdom.ui.BootstrapTimerActivity;
import com.android.itechdom.ui.CheckInsListFragment;
import com.android.itechdom.ui.MainActivity;
import com.android.itechdom.ui.NavigationDrawerFragment;
import com.android.itechdom.ui.NewsActivity;
import com.android.itechdom.ui.NewsListFragment;
import com.android.itechdom.ui.UserActivity;
import com.android.itechdom.ui.UserListFragment;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(
        modules = {
                AndroidModule.class,
                BootstrapModule.class
        }
)
public interface BootstrapComponent {

    void inject(BootstrapApplication target);

    void inject(BootstrapAuthenticatorActivity target);

    void inject(BootstrapTimerActivity target);

    void inject(MainActivity target);

    void inject(CheckInsListFragment target);

    void inject(NavigationDrawerFragment target);

    void inject(NewsActivity target);

    void inject(NewsListFragment target);

    void inject(UserActivity target);

    void inject(UserListFragment target);

    void inject(TimerService target);

    void inject(BootstrapFragmentActivity target);
    void inject(BootstrapActivity target);


}
