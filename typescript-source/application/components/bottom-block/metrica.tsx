import React from "react";
import {YMInitializer} from 'react-yandex-metrika';

export const BottomMetrica: React.FC = () => {
    return <YMInitializer accounts={[65485264]}/>;
};