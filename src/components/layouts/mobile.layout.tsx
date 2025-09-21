import { Utils } from "@/components/libs/utils/index.util";
import React from "react";
import { HTMLAttributes, ReactNode } from "react";

interface MobileLayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function MobileLayout({ children, className, ...rest }: MobileLayoutProps) {
    return (
        <div className={Utils.cn("relative overflow-hidden text-black", className)} {...rest}>
            {children}
        </div>
    );
}
