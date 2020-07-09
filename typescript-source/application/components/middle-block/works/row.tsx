import React, {useMemo} from "react";
import {Row} from "antd";
import {tWorksItem, WorksItem} from "./item";

export type tWorksRowProps = {
    items: tWorksItem[]
};

export const WorksRow: React.FC<tWorksRowProps> = (props) => {
    const items = useMemo<React.ReactElement[]>(() => props.items.map((item, n) => <WorksItem {...item} key={n}/>), [props.items]);

    return <div className={'works-row'}>
        <Row gutter={[16, 24]}>
            {items}
        </Row>
    </div>
};