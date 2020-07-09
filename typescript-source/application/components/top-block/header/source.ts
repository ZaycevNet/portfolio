export type tHeaderSource = {
    handler?: () => void,
    title: string,
    tooltip?: string
};

export const HeaderSource: tHeaderSource[] = [
    {
        title: 'GitHub',
        handler: () => {
            window.location.href = 'https://github.com/ZaycevNet';
        }
    },
    {
        title: 'HeadHunter',
        handler(){
            window.location.href = 'https://hh.ru/resume/79ec5168ff07e32a960039ed1f7a7466356457#key-skills';
        }
    },
    {
        title: 'Agar.IO',
        handler: () => {
            window.location.href = 'https://agar.io/';
        },
    }
];