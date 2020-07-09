import React from 'react';

import {TopBlockMain} from "./components/top-block/main";
import {MiddleBlockMain} from "./components/middle-block/main";
import {BottomMain} from "./components/bottom-block/main";

const Application = () => {
    return <div>
        <TopBlockMain/>
        <MiddleBlockMain/>
        <BottomMain/>
    </div>;
};

export default Application;