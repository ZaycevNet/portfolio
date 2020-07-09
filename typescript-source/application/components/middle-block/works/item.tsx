import React, {useEffect, useMemo, useRef} from "react";
import {Col} from "antd";

export type tWorksItem = {
    img?: string,
    title: string,
    description?: string
};

export const WorksItem: React.FC<tWorksItem> = (props) => {
    const ref = useRef<HTMLDivElement>(null);

    const preview = useMemo<any>(() => props.img ? {backgroundImage: `url(${props.img})`} : {}, [props.img]);

    useEffect(() => {
        ref.current!.style.height = `${ref.current!.style.width}`;
        console.log(ref.current!.style.width);
    }, [ref.current]);

    return <Col className={'works-item'} sm={12} md={12} lg={8} span={8}>
        <div className={'item-wrapper'} ref={ref} style={preview}>
            <div className="description">
                <h3 className="title">{props.title}</h3>
                <div className="links">
                    <div className="block">
                        <a className="link" href="#" title="Link Title">
                            <i className="material-icons">link</i>
                        </a>
                    </div>
                    <div className="block">
                        <a className="link" href="#" title="Link Title">
                            <i className="material-icons">search</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Col>;
};