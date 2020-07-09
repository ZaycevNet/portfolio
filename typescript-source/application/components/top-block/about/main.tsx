import React from "react";
import {AboutAvatar} from "./avatar";
import {AboutName} from "./name";
import {AboutDescription} from "./description";

export const AboutMain: React.FC = () => {
    return <div className={'about-main'}>
        <AboutAvatar/>
        <AboutName/>
        <AboutDescription/>
    </div>;
};