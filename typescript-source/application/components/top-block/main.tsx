import React from 'react';
import {Layout} from "antd";
import {HeaderComponent} from "./header/main";
import {AboutMain} from "./about/main";
import {WorktagsMain} from "./wokr-tags/main";

export const TopBlockMain: React.FC = () => {
    return <Layout className={'top-block bg-primary'}>
        <HeaderComponent/>
        <AboutMain/>
        <WorktagsMain/>
    </Layout>
};