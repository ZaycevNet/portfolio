import React from "react";
import {AboutAvatarPrimary} from "./avatar-primary";
import {AboutAvatarSecondary} from "./avatar-secondary";

export const AboutAvatar: React.FC = () => {
    return <div className={'avatar'}>
        <AboutAvatarPrimary/>
        <AboutAvatarSecondary/>
    </div>;
};