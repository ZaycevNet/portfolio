import Document, { Head, Main, NextScript } from 'next/document';
import Helmet, {HelmetData} from 'react-helmet';
import {DocumentContext, DocumentInitialProps} from "next/dist/next-server/lib/utils";
import React from "react";

export type tHelmetHtmlAttrComponents = {helmet: HelmetData};

export default class MyDocument extends Document<tHelmetHtmlAttrComponents> {
    static async getInitialProps(documentContext: DocumentContext) {
        const documentProps: DocumentInitialProps = await super.getInitialProps(documentContext);

        return {...documentProps, helmet: Helmet.renderStatic()};
    }

    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent()
    }

    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent()
    }

    // should render on <head>
    get helmetHeadComponents() {
        return Object
            .keys(this.props.helmet)
            .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            // @ts-ignore
            .map((el) => this.props.helmet[el].toComponent());
    }

    render() {
        return (
            <html {...this.helmetHtmlAttrComponents}>
                <Head>
                    {this.helmetHeadComponents}
                </Head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}