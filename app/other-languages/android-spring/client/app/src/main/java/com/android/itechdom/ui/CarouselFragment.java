package com.android.itechdom.ui;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.android.itechdom.R;
import com.viewpagerindicator.TitlePageIndicator;

import butterknife.ButterKnife;
import butterknife.Bind;

/**
 * Fragment which houses the View pager.
 */
public class CarouselFragment extends Fragment {

    @Bind(R.id.tpi_header)
    protected TitlePageIndicator indicator;

    @Bind(R.id.vp_pages)
    protected ViewPager pager;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_carousel, container, false);
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        ButterKnife.bind(this, getView());

        pager.setAdapter(new BootstrapPagerAdapter(getResources(), getChildFragmentManager()));
        indicator.setViewPager(pager);
        pager.setCurrentItem(1);

    }
}