import React from 'react';
import {WorksRow} from "./row";
import {WorksSource as source} from "./source";

export const WorksMain: React.FC = () => {
    return <div className={'works'}>
        <WorksRow items={source}/>
    </div>
};