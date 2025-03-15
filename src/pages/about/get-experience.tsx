export type Experience = {
    tittle: string;
    description: string;
    image?: string;
    url?: string;
    duration: string;
}

export const getExperience = (): Experience[] => {
    return [
        {
            tittle: "ISOC Lesotho",
            description: "Web Developer & Designer, DevOps Engineer",
            url: "https://isoc.org.ls/",
            duration: "June, 2024 - Now"
        },
        {
            tittle: "Tsepo Ea Rona Finance",
            description: "Internee: Web Developer & Designer, DevOps Engineer, Backend Engineer",
            duration: "Jul-Nov, 2023"
        }
    ];
}