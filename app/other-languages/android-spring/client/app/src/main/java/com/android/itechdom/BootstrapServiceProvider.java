package com.android.itechdom;

import android.accounts.AccountsException;
import android.app.Activity;

import com.android.itechdom.core.BootstrapService;

import java.io.IOException;

public interface BootstrapServiceProvider {
    BootstrapService getService(Activity activity) throws IOException, AccountsException;
}
