import senateLerotholi from "@/assets/images/reviews/senate-lerotholi.jpeg"

export type ReviewType = {
    name: string;
    status: string | string[];
    profileLink: string;
    body: string;
    img?: string;
    className?: string;
    avatarClassName?: string;
}

export const reviews: ReviewType[] = [
    {
        name: "Senate Lerotholi",
        status: ["Journalist@LilaphalaphaTV"],
        profileLink: "mailto:lerotholisenate300@gmail.com",
        body: "This is exceptionally beautiful. You are amazingly good. I'm so glad I had to work with you. Keep up the status quo!",
        img: senateLerotholi,
        className: "col-span-1",
    },
    {
        name: "Selekane Khaile",
        status: ["Junior SOC Analyst"],
        profileLink: "mailto:khaileselakane@gmail.com",
        className: "md:col-span-2 lg:col-span-3",
        img: "https://avatar.vercel.sh/james",
        body: "Moalosi excelled in the SANReN Cybersecurity Competition, representing Lesotho with strong information gathering and teamwork. His programming skills were vital in overcoming challenges, showcasing his technical abilities. Moalosi's dedication to cybersecurity made him a standout representative for Lesotho.",
    },
    {
        name: "Mamoqenelo Morolong",
        status: ["Part-time Lecturer@Botho University"],
        profileLink: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7221866632522964992?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7221866632522964992%2C7221984839246184450%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287221984839246184450%2Curn%3Ali%3AugcPost%3A7221866632522964992%29",
        className: "md:col-span-2 lg:col-span-3",
        avatarClassName: "w-fit lg:w-fit",
        img: "https://avatar.vercel.sh/james",
        body: "You really did a great Job Liteboho Moalosi. I am very proud of you. Keep growing, keep showing out those skills. I can vividly and proudly attest to how talented you are. Well I saw his coding skills when we attended the Sanren cybersecurity challenges for the very first time in 2022 in Pretoria. Keep up the good work.",
    },
];