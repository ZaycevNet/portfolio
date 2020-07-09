import React, {useMemo} from 'react';
import {HeaderLinkItem, tHeaderLinksItemProps} from "./link-item";

export type tHeaderLinksRowProps = {
    items: tHeaderLinksItemProps[]
};

export const HeaderLinksRow: React.FC<tHeaderLinksRowProps> = (props) => {
    const links = useMemo<React.ReactElement[]>(
        () => props.items
            .map((item, n) => <HeaderLinkItem {...item} key={n}/>),
        [props.items]
    );

    return <div className={'links-row'}>
        {links}
    </div>;
};