import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {MediaButton, MediaButtonProps} from "@/landing/components/media-button";
import {Download} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";



export function HeroSection() {
    return (
        <section
            className="bg-background container mx-auto w-full overflow-hidden px-6 lg:px-8"
            aria-label="Hero section"
        >
            <div className="container mx-auto max-w-5xl py-16 sm:py-28">
                <div className="flex justify-center">
                    <p
                        className="text-secondary-foreground bg-secondary/90 hover:bg-secondary relative rounded-full border px-3 py-1 text-sm whitespace-nowrap shadow-sm transition-colors duration-300"
                        aria-label="Learn about our new Interactive Data Dashboard feature"
                        role="banner"
                    >
                        <span className="text-primary">✨ My Professional Portfolio</span>
                    </p>
                </div>
                
                <div className="relative z-10 mx-auto max-w-3xl pt-5 text-center">
                    <div
                        className="bg-muted absolute inset-x-0 -top-16 z-[-1] h-full bg-[linear-gradient(to_right,var(--muted-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--muted-foreground)_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-size-[28px_28px] opacity-15"
                        aria-hidden="true"
                    />
                    <div className="flex items-center justify-center gap-6 flex-col sm:flex-row mt-6">
                        <div className="flex-shrink-0">
                            <Image
                                src="/avatar.png"
                                alt="Photo de Lilian"
                                width={100}
                                height={100}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                            <h1
                                className="text-foreground text-center sm:text-left bg-gradient-to-tr from-neutral-300 to-white bg-clip-text text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-6xl sm:text-[64px]"
                                aria-describedby="hero-description"
                            >
                                Hello, I'm Lilian. 👋🏻
                            </h1>
                            
                            <div className="mt-2 sm:mt-1 self-center sm:self-start">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Badge className="text-white bg-blue-400 dark:bg-blue-600 cursor-pointer">Jr Fullstack
                                            Developer
                                        </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent side={"bottom"}>
                                        My Job
                                    </TooltipContent>
                                </Tooltip>
                                
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Badge className={"text-white bg-blue-300 dark:bg-blue-400 ml-2"}>
                                            <Link
                                                href={"/files/cv-lilian-caffier.pdf"}
                                                download
                                            >
                                                My Resume
                                            </Link>
                                        </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent side={"bottom"}>
                                        Download my Resume
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    
                    <p
                        className="text-zinc-600 z-15 mx-auto  font-normal text-balance sm:w-[660px] text-[12px] sm:text-[14px] mt-4 md:mt-8"
                        id="hero-description"
                    >
                        I'm a junior web developer with a Bachelor's degree in Computer Science. I build responsive and
                        user-friendly websites using modern technologies. I'm passionate about coding and always eager
                        to learn more.
                    </p>
                    <div className="mt-5 flex justify-center items-center space-x-2 sm:space-x-4">
                        {MEDIA_ITEMS.map((item, key) => {
                            return (
                                <div
                                    key={key}
                                >
                                    <MediaButton
                                        label={item.label}
                                        link={item.link}
                                        src={item.src}
                                        darkSrc={item.darkSrc}
                                        className={item.className}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}


const MEDIA_ITEMS: MediaButtonProps[] = [
    {
        label: "GitHub",
        link: "https://github.com/KryKox",
        src: "/icons/github-icon.svg",
        darkSrc: "/icons/github-white-icon.svg",
        className: "border-zinc-800 text-zinc-800 dark:text-white  dark:border-white hover:shadow-zinc-800 dark:hover:shadow-white"
    },
    {
        label: "Linkedin",
        link: "https://www.linkedin.com/in/lilian-c-a66886293/",
        src: "/icons/linkedin-icon.svg",
        className: "border-blue-500 text-blue-500 hover:shadow-blue-500"
    },
    {
        label: "Youtube",
        link: "https://www.youtube.com/@lilianpro-l3e",
        src: "/icons/youtube-icon.svg",
        className: "border-red-500 text-red-500 hover:shadow-red-500"
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/lilian_tout_cour?igsh=MWQ3b2hwdWk0Y2twag%3D%3D&utm_source=qr",
        src: "/icons/instagram-icon.svg",
        className: "border-pink-500 text-pink-500 hover:shadow-pink-500"
    },
]