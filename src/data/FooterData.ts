import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import linktree from "@/public/assets/tree.svg";

interface footer {
    link: string;
    icon: React.ReactNode;
}

export const footers: footer[] = [
    {
        icon: <Instagram size={40} className="text-white hover:text-leap-yellow" />,
        link: "https://www.instagram.com/hsa.ucr/",
    },
    // {
    //     icon: Facebook,
    //     link: "https://www.facebook.com/hsa.ucriverside",
    // },
    // {
    //     icon: <Image src={linktree}/>,
    //     link: "linktr.ee/hsaucr",
    // },
];