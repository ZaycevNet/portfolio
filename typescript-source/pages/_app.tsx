import React from "react";

import { Helmet } from 'react-helmet'
import {AppProps} from "next/app";

import '../application/assets/main.scss';
import 'antd/dist/antd.min.css';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Alex Zaycev"
                meta={[
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1',
                    },
                    { property: 'og:title', content: 'Alex Zaycev Portfolio' },
                ]}
            />
            <Component {...pageProps} />
        </>
    )
}