package com.android.itechdom.ui;

import android.text.TextUtils;
import android.view.LayoutInflater;

import com.android.itechdom.BootstrapApplication;
import com.android.itechdom.R;
import com.android.itechdom.core.User;

import com.android.itechdom.util.SingleTypeAdapter;
import com.squareup.picasso.Picasso;

import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Adapter to display a list of traffic items
 */
public class UserListAdapter extends SingleTypeAdapter<User> {

    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("MMMM dd");

    /**
     * @param inflater
     * @param items
     */
    public UserListAdapter(final LayoutInflater inflater, final List<User> items) {
        super(inflater, R.layout.user_list_item);

        setItems(items);
    }

    /**
     * @param inflater
     */
    public UserListAdapter(final LayoutInflater inflater) {
        this(inflater, null);

    }

    @Override
    public long getItemId(final int position) {
        final String id = getItem(position).getObjectId();
        return !TextUtils.isEmpty(id) ? id.hashCode() : super
                .getItemId(position);
    }

    @Override
    protected int[] getChildViewIds() {
        return new int[]{R.id.iv_avatar, R.id.tv_name};
    }

    @Override
    protected void update(final int position, final User user) {

        Picasso.with(BootstrapApplication.getInstance())
                .load(user.getAvatarUrl())
                .placeholder(R.drawable.gravatar_icon)
                .into(imageView(0));

        setText(1, String.format("%1$s %2$s", user.getFirstName(), user.getLastName()));

    }

}
