"use client"

import {ThemeToggle} from "@/theme/theme-toggle";
import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const links: { id: string; label: string }[] = [
    { id: "welcome-section", label: "Welcome" },
    { id: "career-section", label: "Career" },
    { id: "skills-section", label: "Skills" },
    { id: "projects-section", label: "Projects" },
    { id: "contact-section", label: "Contact" },
];



const headerVariants = {
    hidden: {
        y: -20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
}

const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.1,
            duration: 0.3,
        },
    }),
}

interface MobileLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    id: string
    label: string
}

function MobileLink({ id, label, className, ...props }: MobileLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        if (id === "welcome-section") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    
    return (
        <a
            onClick={handleClick}
            className={cn(
                "text-muted-foreground w-min py-1 text-sm whitespace-nowrap",
                className
            )}
            {...props}
        >
            {label}
        </a>
    );
}



export function HeaderSection() {
    const pathname = usePathname();
    
    const ref = React.useRef<HTMLUListElement>(null)
    const [left, setLeft] = React.useState(0)
    const [width, setWidth] = React.useState(0)
    const [opacity, setOpacity] = React.useState(0)
    
    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
        const node = e.currentTarget
        const rect = node.getBoundingClientRect()
        setLeft(node.offsetLeft)
        setWidth(rect.width)
        setOpacity(1)
    }
    
    const handleMouseLeave = () => {
        setOpacity(0)
    }
    
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="bg-background/70 sticky top-0 z-40 w-full backdrop-blur-sm"
        >
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 backdrop-blur-xs">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="hidden md:flex"
                >
                    <Logo darkSrc={"/logo/logo-dark.png"} lightSrc={"/logo/logo-light.png"} />
                </motion.div>
                
                <nav
                    className="absolute left-1/2 hidden -translate-x-1/2 transform md:flex"
                    aria-label="Main navigation"
                >
                    <ul
                        onMouseLeave={handleMouseLeave}
                        className="border-border/70 relative flex w-fit rounded-full border p-1"
                        ref={ref}
                    >
                        {links.map((link, index) => (
                            <motion.li
                                key={link.id}
                                custom={index}
                                variants={linkVariants}
                                onMouseEnter={handleMouseEnter}
                                onClick={() => {
                                    if (link.id === "welcome-section") {
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    } else {
                                        const el = document.getElementById(link.id);
                                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                }}
                                className="hover:text-foreground text-muted-foreground z-10 block cursor-pointer px-4 py-1.5 text-sm font-medium tracking-tight transition-colors duration-200"
                            >
                                <span
                                    className={cn(
                                        "text-[13.5px]",
                                        pathname?.includes(link.id)
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground transition-colors"
                                    )}
                                >
                                    {link.label}
                                </span>
                            </motion.li>
                        ))}
                        
                        
                        <motion.li
                            animate={{ left, width, opacity }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="bg-secondary absolute inset-0 my-1.5 rounded-full"
                        />
                    </ul>
                </nav>
                
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="flex items-center gap-3">
                                <button
                                    className="flex items-center [&_svg]:size-5"
                                    aria-label="Open menu"
                                    aria-expanded="false"
                                    aria-controls="mobile-menu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-menu"
                                    >
                                        <line x1="4" x2="20" y1="12" y2="12" />
                                        <line x1="4" x2="20" y1="6" y2="6" />
                                        <line x1="4" x2="20" y1="18" y2="18" />
                                    </svg>
                                    <span className="sr-only">Toggle Menu</span>
                                </button>
                                <Logo darkSrc={"/logo/logo-dark.png"} lightSrc={"/logo/logo-light.png"} />
                            
                            </div>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="border-border bg-background z-50 max-w-72 px-4 pt-0"
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile menu"
                        >
                            <SheetHeader className="p-0">
                                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                                <SheetDescription className="sr-only">
                                    Use the options below to navigate the application.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col items-start">
                                <Logo darkSrc={"/logo/logo-dark.png"} lightSrc={"/logo/logo-light.png"} />
                                <div className="mt-6 flex flex-col space-y-3">
                                    {links.map((item) => (
                                        <MobileLink
                                            key={item.id}
                                            id={item.id}
                                            label={item.label}
                                        />
                                    ))}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                
                <motion.nav
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 text-sm font-medium"
                    aria-label="theme"
                >
                <ThemeToggle />
                </motion.nav>
            </div>
        </motion.div>
    )
}

interface LogoProps {
    darkSrc: string
    lightSrc: string
}

const Logo = ({ darkSrc, lightSrc } : LogoProps) => {
    const { theme } = useTheme()
    const [imageSrc, setImageSrc] = useState(darkSrc)
    
    useEffect(() => {
        setImageSrc(theme === "dark" ? darkSrc : lightSrc)
    }, [theme, darkSrc, lightSrc])
    
    
    return (
        <Link href="/">
            <div className="text-foreground flex items-end gap-2.5">
                <Image
                    src={imageSrc}
                    alt="Lilian Caffier Logo"
                    width={20}
                    height={20}
                    className="h-5 w-auto"
                />
                <span className="font-heading text-lg leading-none font-semibold text-black dark:text-white ">
                    Lilian Caffier.
                </span>
            </div>
        </Link>
    );
};

