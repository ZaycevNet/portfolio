import React, {useMemo} from "react";
import {Row} from "antd";
import {AboutContainerItem} from "./container-item";

export type tAboutContainerProps = {
    children: [React.ReactElement, React.ReactElement]
};

export const AboutContainer: React.FC<tAboutContainerProps> = (props) => {
    const children = useMemo<React.ReactElement[]>(() => props.children.map((child, n) => <AboutContainerItem key={n}>{child}</AboutContainerItem>), [props.children]);

    return <div className={'about-container'}>
        <Row gutter={[44, 16]} justify={'center'} align={'middle'}>
            {children}
        </Row>
    </div>
};