import { ReactComponent as instagram } from "./icon/instagram.svg";
import { ReactComponent as facebook } from "./icon/facebook.svg";
import { ReactComponent as email } from "./icon/email.svg";
import { styleIcon } from "./styled";

export const socials = [
  {
    name: "instagram",
    url: "https://www.instagram.com/ulotnechwilefilipiakfotografia/",
    Icon: styleIcon(instagram),
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/ulotnechwilefilipiakfotografia",
    Icon: styleIcon(facebook),
  },
  {
    name: "email",
    url: "",
    Icon: styleIcon(email),
  },
];
