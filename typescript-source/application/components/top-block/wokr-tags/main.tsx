import React from 'react';
import {WorktagsTagsRow} from "./tags-row";
import {WorkTagsSource as source} from "./source";

export const WorktagsMain: React.FC = () => {
    return <div className={'works-container'}>
        <div className={'work-tags'}>
            <WorktagsTagsRow tags={source}/>
        </div>
    </div>;
};