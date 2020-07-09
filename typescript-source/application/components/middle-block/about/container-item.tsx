import React from 'react';
import {Col} from "antd";

export const AboutContainerItem: React.FC = (props) => {
    return <Col xs={24} md={12}>
        {props.children}
    </Col>;
};