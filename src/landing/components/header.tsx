"use client"

import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
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


const links: { href: string; label: string }[] = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#experience", label: "Expérience" },
    { href: "#contact", label: "Contact" },
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
    href: string
    label: string
}

function MobileLink({ href, label, className, ...props }: MobileLinkProps) {
    const router = useRouter();

    
    return (
        <a
            href={href}
            onClick={() => {
                router.push(href.toString());
            }}
            className={cn(
                "text-muted-foreground w-min py-1 text-sm whitespace-nowrap",
                className
            )}
            {...props}
        >
            {label}
        </a>
    )
}

export function Header() {
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
                    <Logo />
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
                                key={link.href}
                                custom={index}
                                variants={linkVariants}
                                onMouseEnter={handleMouseEnter}
                                className="hover:text-foreground text-muted-foreground z-10 block cursor-pointer px-4 py-1.5 text-sm font-medium tracking-tight transition-colors duration-200"
                            >
                                <a
                                    href={link.href}
                                    className={cn(
                                        "text-[13.5px]",
                                        pathname?.startsWith(link.href)
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground transition-colors"
                                    )}
                                >
                                    {link.label}
                                </a>
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
                                <Logo />
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
                                <Logo />
                                <div className="mt-6 flex flex-col space-y-3">
                                    {links.map((item) => (
                                        <MobileLink
                                            key={item.href}
                                            href={item.href}
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
                    aria-label="Authentication"
                >
                
                </motion.nav>
            </div>
        </motion.div>
    )
}
const Logo = () => {
    return (
        <a href="#home">
            <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 190 190"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M102.256 188.162C97.6186 190.613 92.0647 190.613 87.4273 188.162L11.3881 147.988C6.20803 145.251 2.96875 139.885 2.96875 134.04L2.96875 55.9596C2.96875 50.115 6.20804 44.7487 11.3881 42.0119L87.4273 1.83758C92.0647 -0.612537 97.6186 -0.612537 102.256 1.83758L178.295 42.0119C183.475 44.7487 186.715 50.115 186.715 55.9596L186.715 134.04C186.715 139.885 183.475 145.251 178.295 147.988L102.256 188.162ZM17.2566 130.86C17.2566 133.8 18.9004 136.499 21.5152 137.859L86.6791 171.709C89.3137 173.075 92.4666 171.171 92.4666 168.21L92.4666 100.577C92.4666 97.6363 90.8224 94.9374 88.208 93.5771L23.0442 59.727C20.4089 58.3581 17.2566 60.2643 17.2566 63.2268L17.2566 130.86Z"
                        fill="currentColor"
                    />
                </svg>
                <span className="font-heading text-lg leading-none font-semibold">
          Lilian Caffier.
        </span>
            </div>
        </a>
    )
}
