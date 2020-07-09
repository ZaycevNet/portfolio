import React from 'react';
import {Layout} from "antd";
import {BottomTitle} from "./title";
import {BottomContainer} from "./container";
import {BottomCopyright} from "./copyright";
import {BottomRequest} from "./request";
import {BottomRequestNeighbour} from "./request-neighbour";

export const BottomMain = () => {
    return <Layout className={'bottom-block bg-primary'}>
        <BottomTitle/>
        <BottomContainer>
            <BottomRequestNeighbour/>
            <BottomRequest/>
        </BottomContainer>
        <BottomCopyright/>
    </Layout>
};