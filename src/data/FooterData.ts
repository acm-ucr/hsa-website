import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import linktree from "@/public/assets/tree.svg";

interface footer {
    link: string;
    icon: React.ReactNode;
}

export const footers: footer[] = [
    {
        icon: <Instagram/>,
        link: "https://www.instagram.com/hsa.ucr/",
    },
    // {
    //     icon: <Facebook/>,
    //     link: "https://www.facebook.com/hsa.ucriverside",
    // },
    // {
    //     icon: <Image src={linktree}/>,
    //     link: "https://linktr.ee/hsaucr?fbclid=PAZXh0bgNhZW0CMTEAAaZfaPhqX1q9SgLLM68xZX-ED_jj669Ej66BvOZ4u4N87PldtVkBl3X_Ys4_aem_WKm_Fwe5Sb4UX718TfkHwg",
    // },
];