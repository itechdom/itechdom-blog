package com.android.itechdom.events;

import java.io.Serializable;

import retrofit.RetrofitError;

public class UnAuthorizedErrorEvent {
    private Serializable cause;

    public UnAuthorizedErrorEvent(Serializable cause) {
        this.cause = cause;
    }

    public Serializable getCause() {
        return cause;
    }
}
