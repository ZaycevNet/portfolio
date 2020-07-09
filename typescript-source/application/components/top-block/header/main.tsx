import React from 'react';
import {HeaderLinksRow} from "./links-row";
import {HeaderSource as source} from "./source";

export const HeaderComponent: React.FC = () => {
    return <div className={'header-main'}>
        <HeaderLinksRow items={source}/>
    </div>
};