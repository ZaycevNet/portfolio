export type tTarget = any;
export type tPropertyKey = string;
export type tDescriptor = PropertyDescriptor;

const buildMiddlewareContainer: Function = (t: tTarget, k: tPropertyKey): void => {
    const _k = `__${k}_middleware_container__`;

    if(!t[_k])
        t[_k] = [];


};

const buildNewDescriptor: Function = (d: tDescriptor, p: tDescriptor): tDescriptor => ({...d, ...p});

export const Get = () => (t: tTarget, k: tPropertyKey, d: tDescriptor): tDescriptor => {
    buildMiddlewareContainer(t,k);



    return buildNewDescriptor(d, {});
};