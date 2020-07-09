import React from 'react';
import {OpportunitiesTitle} from "./title";
import {OpportunitiesContainer} from "./container";
import {OpportunitiesRow} from "./row";
import {OpportunitiesSource as source} from "./source";

export const OpportunitiesMain: React.FC = () => {
    return <div className={'opportunities bg-primary'}>
        <OpportunitiesContainer>
            <OpportunitiesTitle/>
            <OpportunitiesRow items={source}/>
        </OpportunitiesContainer>
    </div>
};