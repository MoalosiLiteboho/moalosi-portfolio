import senateLerotholi from "@/assets/images/reviews/senate-lerotholi.jpeg"

export type ReviewType = {
    name: string;
    status: string | string[];
    profileLink: string;
    body: string;
    img: string;
}

export const reviews: ReviewType[] = [
    {
        name: "Senate Lerotholi",
        status: ["Journalist", "Freelance Writer", "Marketing Director"],
        profileLink: "mailto:lerotholisenate300@gmail.com",
        body: "This is exceptionally beautiful. You are amazingly good. I'm so glad I had to work with you. Keep up the status quo!",
        img: senateLerotholi,
    },
];