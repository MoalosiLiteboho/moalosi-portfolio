import senateLerotholi from "@/assets/images/reviews/senate-lerotholi.jpeg"

export type ReviewType = {
    name: string;
    status: string | string[];
    profileLink: string;
    body: string;
    img?: string;
    className?: string;
}

export const reviews: ReviewType[] = [
    {
        name: "Senate Lerotholi",
        status: ["Journalist@Lilapalapha TV", "Freelance Writer", "Marketing Director"],
        profileLink: "mailto:lerotholisenate300@gmail.com",
        body: "This is exceptionally beautiful. You are amazingly good. I'm so glad I had to work with you. Keep up the status quo!",
        img: senateLerotholi,
        className: "col-span-1",
    },
    {
        name: "Selekane Khaile",
        status: ["Cybersecurity", "CTF Player", "Junior Sock Analyst", "Captain@Cybersecurity SANReN 2022 Challenge"],
        profileLink: "mailto:khaileselakane@gmail.com",
        className: "md:col-span-2 lg:col-span-3",
        img: "https://avatar.vercel.sh/james",
        body: "Moalosi excelled in the SANReN Cybersecurity Competition, representing Lesotho with strong information gathering and teamwork. His programming skills were vital in overcoming challenges, showcasing his technical abilities. Moalosi's dedication to cybersecurity made him a standout representative for Lesotho.",
    },
];