import React, {useEffect, useMemo, useRef} from "react";
import {Col} from "antd";

export type tWorksItem = {
    img?: string,
    title: string,
    preview?: string,
    source?: string,
    description?: string
};

export const WorksItem: React.FC<tWorksItem> = (props) => {
    const ref = useRef<HTMLDivElement>(null);

    const preview = useMemo<any>(() => props.img ? {backgroundImage: `url(${props.img})`} : {}, [props.img]);

    useEffect(() => {
        ref.current!.style.height = `${ref.current!.style.width}`;
    }, [ref.current]);

    return <Col className={'works-item'} sm={12} md={12} lg={8} span={8}>
        <div className={'item-wrapper'} ref={ref} style={preview}>
            <div className="description">
                <h3 className="title">{props.title}</h3>
                <div className="links">
                    <div className="block">
                        <a target={'_blank'} className={'link' + props.source ? '' : ' disabled'} href={props.source ? props.source : '#'} title="View source">
                            <i className="material-icons">link</i>
                        </a>
                    </div>
                    <div className="block">
                        <a target={'_blank'} className={'link' + props.preview ? '' : ' disabled'} href={props.preview ? props.preview : '#'} title="View preview">
                            <i className="material-icons">remove_red_eye</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Col>;
};