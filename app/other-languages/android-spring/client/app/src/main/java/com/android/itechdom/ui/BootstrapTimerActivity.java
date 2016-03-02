package com.android.itechdom.ui;

import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.NavUtils;
import android.support.v4.app.TaskStackBuilder;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.android.itechdom.BootstrapApplication;
import com.android.itechdom.R;
import com.android.itechdom.core.PauseTimerEvent;
import com.android.itechdom.core.ResumeTimerEvent;
import com.android.itechdom.core.StopTimerEvent;
import com.android.itechdom.core.TimerPausedEvent;
import com.android.itechdom.core.TimerService;
import com.android.itechdom.core.TimerTickEvent;
import com.android.itechdom.util.TimeUtil;
import com.squareup.otto.Bus;
import com.squareup.otto.Subscribe;

import javax.inject.Inject;

import butterknife.Bind;

import static android.view.View.GONE;
import static android.view.View.VISIBLE;

public class BootstrapTimerActivity extends BootstrapFragmentActivity implements View.OnClickListener {

    @Inject Bus eventBus;

    @Bind(R.id.chronometer) protected TextView chronometer;
    @Bind(R.id.start) protected Button start;
    @Bind(R.id.stop) protected Button stop;
    @Bind(R.id.pause) protected Button pause;
    @Bind(R.id.resume) protected Button resume;

    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        BootstrapApplication.component().inject(this);

        setContentView(R.layout.bootstrap_timer);

        setTitle(R.string.title_timer);

        getSupportActionBar().setHomeButtonEnabled(true);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        start.setOnClickListener(this);
        stop.setOnClickListener(this);
        pause.setOnClickListener(this);
        resume.setOnClickListener(this);

    }

    @Override
    public void onClick(final View v) {
        switch (v.getId()) {
            case R.id.start:
                startTimer();
                break;
            case R.id.stop:
                produceStopEvent();
                break;
            case R.id.pause:
                producePauseEvent();
                break;
            case R.id.resume:
                produceResumeEvent();
                break;
        }
    }

    @Override
    public boolean onOptionsItemSelected(final MenuItem item) {
        switch (item.getItemId()) {
            // Source:
            // http://developer.android.com/training/implementing-navigation/ancestral.html
            // This is the home button in the top left corner of the screen.
            case android.R.id.home:
                final Intent upIntent = NavUtils.getParentActivityIntent(this);
                // If parent is not properly defined in AndroidManifest.xml upIntent will be null
                // TODO hanlde upIntent == null
                if (NavUtils.shouldUpRecreateTask(this, upIntent)) {
                    // This activity is NOT part of this app's task, so create a new task
                    // when navigating up, with a synthesized back stack.
                    TaskStackBuilder.create(this)
                            // Add all of this activity's parents to the back stack
                            .addNextIntentWithParentStack(upIntent)
                                    // Navigate up to the closest parent
                            .startActivities();
                } else {
                    // This activity is part of this app's task, so simply
                    // navigate up to the logical parent activity.
                    NavUtils.navigateUpTo(this, upIntent);
                }
                return true;
                default:
                return super.onOptionsItemSelected(item);
        }
    }

    /**
     * Starts the timer service
     */
    private void startTimer() {
        if (!isTimerServiceRunning()) {
            final Intent i = new Intent(this, TimerService.class);
            startService(i);

            setButtonVisibility(GONE, VISIBLE, GONE, VISIBLE);
        }
    }

    /**
     * Posts a {@link StopTimerEvent} message to the {@link Bus}
     */
    private void produceStopEvent() {
        eventBus.post(new StopTimerEvent());
    }

    /**
     * Posts a {@link PauseTimerEvent} message to the {@link Bus}
     */
    private void producePauseEvent() {
        eventBus.post(new PauseTimerEvent());
    }

    /**
     * Posts a {@link ResumeTimerEvent} message to the {@link Bus}
     */
    private void produceResumeEvent() {
        eventBus.post(new ResumeTimerEvent());
    }

    @Subscribe
    public void onTimerPausedEvent(final TimerPausedEvent event) {
        if (event.isTimerIsPaused()) {
            setButtonVisibility(GONE, VISIBLE, VISIBLE, GONE);
        } else if (isTimerServiceRunning()) {
            setButtonVisibility(GONE, VISIBLE, GONE, VISIBLE);
        }
    }

    /**
     * Called by {@link Bus} when a tick event occurs.
     *
     * @param event The event
     */
    @Subscribe
    public void onTickEvent(final TimerTickEvent event) {
        setFormattedTime(event.getMillis());
    }

    /**
     * Called by {@link Bus} when a tick event occurs.
     *
     * @param event The event
     */
    @Subscribe
    public void onPauseEvent(final PauseTimerEvent event) {
        setButtonVisibility(GONE, VISIBLE, VISIBLE, GONE);
    }

    /**
     * Called by {@link Bus} when a tick event occurs.
     *
     * @param event The event
     */
    @Subscribe
    public void onResumeEvent(final ResumeTimerEvent event) {
        setButtonVisibility(GONE, VISIBLE, GONE, VISIBLE);
    }

    /**
     * Called by {@link Bus} when a tick event occurs.
     *
     * @param event The event
     */
    @Subscribe
    public void onStopEvent(final StopTimerEvent event) {
        setButtonVisibility(VISIBLE, GONE, GONE, GONE);
        setFormattedTime(0); // Since its stopped, zero out the timer.
    }

    /**
     * Checks to see if the timer service is running or not.
     *
     * @return true if the service is running otherwise false.
     */
    private boolean isTimerServiceRunning() {
        final ActivityManager manager = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
        for (ActivityManager.RunningServiceInfo service : manager.getRunningServices(Integer.MAX_VALUE)) {
            if (TimerService.class.getName().equals(service.service.getClassName())) {
                return true;
            }
        }
        return false;
    }

    private void setButtonVisibility(final int start, final int stop,
                                     final int resume, final int pause) {
        this.start.setVisibility(start);
        this.stop.setVisibility(stop);
        this.resume.setVisibility(resume);
        this.pause.setVisibility(pause);
    }

    /**
     * Sets the formatted time
     *
     * @param millis the elapsed time
     */
    private void setFormattedTime(long millis) {
        final String formattedTime = TimeUtil.formatTime(millis);
        chronometer.setText(formattedTime);
    }


}
