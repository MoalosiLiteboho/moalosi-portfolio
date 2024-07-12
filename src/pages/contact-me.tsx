import {Link} from "@nextui-org/react";
import {SiMinutemailer} from "react-icons/si";
import {PiPhoneCall} from "react-icons/pi";
import {FaLinkedin, FaWhatsapp, FaXTwitter} from "react-icons/fa6";

export default function ContactMePage() {
    return (
        <>
            <section className="p-4">
                <h1 className="text-center text-2xl font-light">Contact Me</h1>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-start">
                        <Link
                            className="flex items-center gap-x-2 text-foreground"
                        >
                            <SiMinutemailer className="text-success" />
                            <span>litebohojamesmoalosi@gmail.com</span>
                        </Link>
                        <Link
                            className="flex items-center gap-x-2 text-foreground"
                        >
                            <SiMinutemailer className="text-success" />
                            <span>liteboho.moalosi@bothouniversity.com</span>
                        </Link>
                        <div className="flex items-center gap-x-2">
                            <PiPhoneCall className="text-primary" />
                            <span>+266 5981 2856</span>
                        </div>
                        <div className="flex items-center gap-x-2 text-foreground">
                            <FaWhatsapp className="text-[#25D366]" />
                            <span>+266 5981 2856</span>
                        </div>
                        <Link
                            className="flex items-center gap-x-2 text-foreground"
                        >
                            <FaLinkedin className="text-[#0077B5]" />
                            <span>Liteboho (James) Moalosi</span>
                        </Link>
                        <Link
                            className="flex items-center gap-x-2 text-foreground"
                        >
                            <FaXTwitter />
                            <span>Liteboho James Moalosi (@GenieMoalosi)</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}