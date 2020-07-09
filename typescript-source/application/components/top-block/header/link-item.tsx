import React, {useCallback, useMemo, MouseEventHandler} from 'react';
import {tHeaderSource} from "./source";
import {Tooltip} from "antd";

export type tHeaderLinksItemProps = tHeaderSource;

export const HeaderLinkItem: React.FC<tHeaderLinksItemProps> = (props: tHeaderLinksItemProps) => {
    const handler = useCallback<MouseEventHandler<HTMLAnchorElement>>((event) => {
        event.preventDefault();
        if(props.handler) props.handler();
    }, [props.handler]);

    return useMemo<React.ReactElement>(() => {
        const link = <a className={'link-item'} href={'#'} onClick={handler}>
            {props.title}
        </a>;

        if (props.tooltip)
            return <Tooltip title={props.tooltip} placement={'top'}>{link}</Tooltip>;

        return link;
    }, [props]);
};