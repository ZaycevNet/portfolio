import React from 'react';

export const AboutContent: React.FC = () => {
    return <div className={'about-content'}>
        <div className={'title'}>
            About me
        </div>
        <div className={'content'}>
            <p>
                I’ve been developing since school years. I started with PHP in my notebook on a PC, the code then was, to put it mildly, not really.
            </p>

            <p>
                Now I position myself as a Middle JavaScript developer, for all the time of my development I gained a lot of experience, emphasized some features for myself, tried to write many projects (fortunately, most of them never saw the light of the day), worked with many libraries and I strive to develop further, gain more experience, work on interesting and complex projects, learn new programming languages and much more
            </p>

            <p>
                If you want to work with me or offer a job, here is my mail <i><a href={'mailto:alex@zaycev.dev'}>alex@zaycev.dev</a></i>, and below you can send me a message from the site and I will answer you.
            </p>
        </div>
    </div>;
};