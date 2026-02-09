export interface Education {
    degree: string;
    school: string;
    period: string;
    gpax: string;
    description: string;
    achievements?: string[];
}

export const educations: Education[] = [
    {
        degree: 'Bachelor of Engineering in Computer Engineering',
        school: 'Walailak University',
        period: '2022 - 2026',
        gpax: '3.76',
        description: 'Currently pursuing a degree in Computer Engineering, focusing on software development, system design, and modern web technologies.',
        achievements: [],
    },
];
