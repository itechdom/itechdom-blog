
package com.android.itechdom;

import android.accounts.AccountsException;
import android.app.Activity;

import com.android.itechdom.authenticator.ApiKeyProvider;
import com.android.itechdom.core.BootstrapService;
import com.android.itechdom.core.UserAgentProvider;

import java.io.IOException;

import javax.inject.Inject;

import retrofit.RestAdapter;

/**
 * Provider for a {@link com.android.itechdom.core.BootstrapService} instance
 */
public class BootstrapServiceProviderImpl implements BootstrapServiceProvider {

    private RestAdapter restAdapter;
    private ApiKeyProvider keyProvider;

    public BootstrapServiceProviderImpl(RestAdapter restAdapter, ApiKeyProvider keyProvider) {
        this.restAdapter = restAdapter;
        this.keyProvider = keyProvider;
    }

    /**
     * Get service for configured key provider
     * <p/>
     * This method gets an auth key and so it blocks and shouldn't be called on the main thread.
     *
     * @return bootstrap service
     * @throws IOException
     * @throws AccountsException
     */
    @Override
    public BootstrapService getService(final Activity activity)
            throws IOException, AccountsException {
        // The call to keyProvider.getAuthKey(...) is what initiates the login screen. Call that now.
        keyProvider.getAuthKey(activity);

        return new BootstrapService(restAdapter);
    }
}
