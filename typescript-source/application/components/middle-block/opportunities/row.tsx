import React, {useMemo} from 'react';
import {Row} from "antd";
import {OpportunitiesItem, tOpportunitiesItem} from "./item";

export type tOpportunitiesRowProps = {
    items: tOpportunitiesItem[]
};

export const OpportunitiesRow: React.FC<tOpportunitiesRowProps> = (props) => {
    const items = useMemo<React.ReactElement[]>(() => props.items.map((item, n) => <OpportunitiesItem {...item} key={n}/>), [props.items]);
    return <div className={'opportunities-row'}>
        <Row gutter={[26, 64]} justify={'center'}>
            {items}
        </Row>
    </div>
}