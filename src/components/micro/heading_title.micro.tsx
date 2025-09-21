import { Utils } from "@/components/libs/utils/index.util";
import { HTMLAttributes } from "react";

interface HeadingTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    title: string;
}

export default function HeadingTitle({ title, className, ...rest }: HeadingTitleProps) {
    return (
        <h2 className={Utils.cn("-mt-1 tracking-wide font-semibold text-lg xxs:text-2xl sm:text-3xl", className)} { ...rest } dangerouslySetInnerHTML={{ __html: title }} />
    );
}