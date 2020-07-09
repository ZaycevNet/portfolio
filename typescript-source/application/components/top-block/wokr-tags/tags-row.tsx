import React, {useMemo} from 'react';
import {tWorkTagsItem, WorktagsItem} from "./tags-item";

export type tWorktagsRowProps = {
    tags: tWorkTagsItem[]
};

export const WorktagsTagsRow: React.FC<tWorktagsRowProps> = (props) => {
    const tags = useMemo<React.ReactElement[]>(() => {
        const tags = props.tags;
        const allTag: tWorkTagsItem = {
            title: 'All',
            active: false,
            published: tags.reduce((a, tag) => a + tag.published, 0)
        };

        return [...tags].map((tag, n) => <WorktagsItem {...tag} key={n}/>);
    }, [props.tags]);

    return <div className={'tags-row'}>
        {tags}
    </div>;
};