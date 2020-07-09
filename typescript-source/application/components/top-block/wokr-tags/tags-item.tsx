import React from "react";

export type tWorkTagsItem = {
    title: string,
    active: boolean,
    published: number
};

export const WorktagsItem: React.FC<tWorkTagsItem> = (props: tWorkTagsItem) => {
    return <div className={'tags-item' + (props.active ? ' active' : '')}>
        {props.title}
    </div>;
};