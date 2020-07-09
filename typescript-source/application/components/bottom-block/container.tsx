import React, {useMemo} from "react";
import {Col, Row} from "antd";

export type tBottomContainerProps = {
    children: React.ReactElement[]
};

export const BottomContainer: React.FC<tBottomContainerProps> = (props) => {
    const children = useMemo(() => props.children.map((child, n) => <Col xs={24} md={12} key={n}><div className={'bottom-container-item'}>{child}</div></Col>), [props.children]);
    return <div className={'bottom-container'}>
        <Row gutter={[44, 16]} justify={'center'} align={'middle'}>
            {children}
        </Row>
    </div>
};