import React from 'react';
import {AboutContainer} from "./container";
import {AboutContent} from "./content";
import {AboutContentNeighbour} from "./content-neighbour";

export const AboutMain: React.FC = () => {
    return <div className={'about'}>
        <AboutContainer>
            <AboutContent/>
            <AboutContentNeighbour/>
        </AboutContainer>
    </div>;
};