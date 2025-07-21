"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type MediaButtonProps = {
    label: string;
    link: string;
    src: string;
    darkSrc?: string;
    alt?: string;
    className?: string;
};

export const MediaButton = ({ label, link, src, darkSrc, alt = "media icon", className }: MediaButtonProps) => {
    const { theme } = useTheme();
    const [imageSrc, setImageSrc] = useState(src);
    
    useEffect(() => {
        if (theme === "dark" && darkSrc) {
            setImageSrc(darkSrc);
        } else {
            setImageSrc(src);
        }
    }, [theme, darkSrc, src]);
    
    return (
        <Link
            href={link}
            className={cn(
                "group py-0.5 px-2 bg-white dark:bg-black shadow-sm text-sm flex items-center transition border rounded-sm font-medium min-w-0 max-w-full",
                className
            )}
            target="_blank"
        >
            <Image
                src={imageSrc}
                alt={alt}
                width={15}
                height={15}
                className="mr-2 flex-shrink-0 transition-transform group-hover:rotate-[20deg] duration-500"
            />
            <span className="truncate text-[10px] text-sm md:text-[15px]">{label}</span>
        </Link>
    );
};
