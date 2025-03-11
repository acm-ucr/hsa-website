import { Instagram } from "lucide-react";
import { SiFacebook } from "react-icons/si";
import { SiLinktree } from "react-icons/si";

interface Footer {
  link: string;
  icon: React.ReactNode;
}

export const footers: Footer[] = [
  {
    icon: <Instagram size={30} />,
    link: "https://www.instagram.com/hsa.ucr/",
  },
  {
    icon: <SiFacebook size={30} />,
    link: "https://www.facebook.com/hsa.ucriverside",
  },
  {
    icon: <SiLinktree size={30} />,
    link: "https://linktr.ee/hsaucr?fbclid=PAZXh0bgNhZW0CMTEAAaZfaPhqX1q9SgLLM68xZX-ED_jj669Ej66BvOZ4u4N87PldtVkBl3X_Ys4_aem_WKm_Fwe5Sb4UX718TfkHwg",
  },
];
