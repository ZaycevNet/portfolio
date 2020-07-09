import React from 'react';
import {Layout} from "antd";
import {WorksMain} from "./works/main";
import {OpportunitiesMain} from "./opportunities/main";
import {AboutMain} from "./about/main";

export const MiddleBlockMain: React.FC = () => {
    return <Layout className={'middle-block'}>
        <WorksMain/>
        <OpportunitiesMain/>
        <AboutMain/>
    </Layout>;
};