import React from "react";
import {Col} from "antd";

export type tOpportunitiesItem = {
    icon: string,
    title: string,
    description: string
};

export const OpportunitiesItem: React.FC<tOpportunitiesItem> = (props) => {
    return <Col className={'works-item'} xs={24} sm={12} md={8} span={8}>
        <div className={'opportunities-item'}>
            <i className={'icon material-icons'}>
                {props.icon}
            </i>
            <div className={'title'}>
                {props.title}
            </div>
            <div className={'description'}>
                {props.description}
            </div>
        </div>
    </Col>
};