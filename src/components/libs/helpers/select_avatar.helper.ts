import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Avatar1 from "@/assets/avatars/Avatar-2.svg";
import Avatar2 from "@/assets/avatars/Avatar-3.svg";
import Avatar3 from "@/assets/avatars/Avatar-1.svg";
import Avatar4 from "@/assets/avatars/Avatar-4.svg";
import Avatar5 from "@/assets/avatars/Avatar-5.svg";
import Avatar6 from "@/assets/avatars/Avatar-6.svg";
import Avatar7 from "@/assets/avatars/Avatar-7.svg";
import Avatar8 from "@/assets/avatars/Avatar-8.svg";
import Avatar9 from "@/assets/avatars/Avatar-9.svg";
import Avatar10 from "@/assets/avatars/Avatar-10.svg";
import Avatar11 from "@/assets/avatars/Avatar-11.svg";
import Avatar12 from "@/assets/avatars/Avatar-12.svg";

export const avatarData = [
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar9,
    Avatar10,
    Avatar11,
    Avatar12,
]

export const selectAvatar = (idx: number): StaticImport => {
    return avatarData[idx - 1]
}