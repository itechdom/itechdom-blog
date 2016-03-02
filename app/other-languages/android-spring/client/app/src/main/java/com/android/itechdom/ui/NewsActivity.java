package com.android.itechdom.ui;

import android.os.Bundle;
import android.widget.TextView;

import com.android.itechdom.R;
import com.android.itechdom.core.News;

import butterknife.Bind;

import static com.android.itechdom.core.Constants.Extra.NEWS_ITEM;

public class NewsActivity extends BootstrapActivity {

    private News newsItem;

    @Bind(R.id.tv_title) protected TextView title;
    @Bind(R.id.tv_content) protected TextView content;

    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.news);

        if (getIntent() != null && getIntent().getExtras() != null) {
            newsItem = (News) getIntent().getExtras().getSerializable(NEWS_ITEM);
        }

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);

        setTitle(newsItem.getTitle());

        title.setText(newsItem.getTitle());
        content.setText(newsItem.getContent());

    }

}
