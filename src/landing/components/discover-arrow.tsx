"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import * as React from "react";

interface DiscoverArrowProps {
    content: string;
    targetId: string;
}

export const DiscoverArrow = ({ content, targetId }: DiscoverArrowProps) => {
    const handleClick = () => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <svg
                    onClick={handleClick}
                    className="w-6 h-6 text-muted-foreground dark:text-zinc-400 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </TooltipTrigger>
            <TooltipContent>
                {content}
            </TooltipContent>
        </Tooltip>
    );
};
