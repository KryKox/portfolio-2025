import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {DiscoverArrow} from "@/landing/components/discover-arrow";
import {MediaButton, MediaButtonProps} from "@/landing/components/media-button";
import {Contact, Paperclip} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";



export function HeroSection() {
    return (
        <section
            id={"welcome-section"}
            className="bg-background/70 mx-auto  w-full overflow-hidden"
            aria-label="Hero section"
        >
            <div className="container mx-auto max-w-5xl py-16 sm:py-28">
                <div className="flex justify-center ">
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
                                className="font-caption scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl !leading-tight max-sm:text-3xl"
                                aria-describedby="hero-description"
                            >
                                Hello,  I'm {" "}
                                <b className="relative inline-block">
                                    <svg className="absolute -z-10 w-[calc(100%+1rem)]  fill-blue-400 dark:fill-blue-600"
                                         xmlns="http://www.w3.org/2000/svg" width="223" height="62" viewBox="0 0 223 62"
                                         aria-hidden="true" preserveAspectRatio="none">
                                        <path
                                            d="M45.654 53.62c17.666 3.154 35.622 4.512 53.558 4.837 17.94.288 35.91-.468 53.702-2.54 8.89-1.062 17.742-2.442 26.455-4.352 8.684-1.945 17.338-4.3 25.303-7.905 3.94-1.81 7.79-3.962 10.634-6.777 1.38-1.41 2.424-2.994 2.758-4.561.358-1.563-.078-3.143-1.046-4.677-.986-1.524-2.43-2.96-4.114-4.175a37.926 37.926 0 0 0-5.422-3.32c-3.84-1.977-7.958-3.563-12.156-4.933-8.42-2.707-17.148-4.653-25.95-6.145-8.802-1.52-17.702-2.56-26.622-3.333-17.852-1.49-35.826-1.776-53.739-.978-8.953.433-17.898 1.125-26.79 2.22-8.887 1.095-17.738 2.541-26.428 4.616-4.342 1.037-8.648 2.226-12.853 3.676-4.197 1.455-8.314 3.16-12.104 5.363-1.862 1.13-3.706 2.333-5.218 3.829-1.52 1.47-2.79 3.193-3.285 5.113-.528 1.912-.127 3.965.951 5.743 1.07 1.785 2.632 3.335 4.348 4.68 2.135 1.652 3.2 2.672 2.986 3.083-.18.362-1.674.114-4.08-1.638-1.863-1.387-3.63-3.014-4.95-5.09C.94 35.316.424 34.148.171 32.89c-.275-1.253-.198-2.579.069-3.822.588-2.515 2.098-4.582 3.76-6.276 1.673-1.724 3.612-3.053 5.57-4.303 3.96-2.426 8.177-4.278 12.457-5.868 4.287-1.584 8.654-2.89 13.054-4.036 8.801-2.292 17.74-3.925 26.716-5.19C70.777 2.131 79.805 1.286 88.846.723c18.087-1.065 36.236-.974 54.325.397 9.041.717 18.07 1.714 27.042 3.225 8.972 1.485 17.895 3.444 26.649 6.253 4.37 1.426 8.697 3.083 12.878 5.243a42.11 42.11 0 0 1 6.094 3.762c1.954 1.44 3.823 3.2 5.283 5.485a12.515 12.515 0 0 1 1.63 3.88c.164.706.184 1.463.253 2.193-.063.73-.094 1.485-.247 2.195-.652 2.886-2.325 5.141-4.09 6.934-3.635 3.533-7.853 5.751-12.083 7.688-8.519 3.778-17.394 6.09-26.296 7.998-8.917 1.86-17.913 3.152-26.928 4.104-18.039 1.851-36.17 2.295-54.239 1.622-18.062-.713-36.112-2.535-53.824-6.23-5.941-1.31-5.217-2.91.361-1.852"></path>
                                    </svg>
                                    {" "}
                                    Lilian Caffier
                                </b>
                                {" "}
                                <span className="inline-block animate-wave origin-[70%_70%]">👋🏼</span>
                            
                            
                            </h1>
                            
                            <div className="mt-2 sm:mt-1 self-center sm:self-start ">
                                <Badge className="text-white bg-blue-400 md:text-sm dark:bg-blue-600 cursor-pointer">
                                    Fullstack Developer
                                </Badge>
                                <Badge className="mx-2 text-white bg-blue-300 md:text-sm dark:bg-blue-400 cursor-pointer">
                                    Trader
                                </Badge>
                            </div>
                        </div>
                    </div>
                    
                    <p
                        className="text-zinc-600 italic z-15 mx-auto  font-normal text-balance  text-[14px] sm:text-[18px] mt-4 md:mt-8"
                        id="hero-description"
                    >
                        I’m a junior trader and fullstack developer. I analyze financial markets and build trading tools to support data-driven decision-making. With a strong foundation in programming and a passion for market dynamics, I enjoy developing efficient, automated trading systems and continuously expanding my knowledge in both finance and technology.
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
                    <Separator className={"my-12"}/>
                </div>
                
                <div className="flex justify-center items-center gap-4">
                    <Button className={"bg-blue-500 hover:bg-blue-400 duration-500 text-white text-xs md:text-md"}>
                        <Contact size={8} className={"ml-2"}/>
                        Contact Me
                    </Button>
                    
                    <Button className={"bg-blue-400 hover:bg-blue-300 duration-500 text-white text-xs md:text-md"}>
                        <Paperclip size={8} className={"ml-2"}/>
                        My projects
                    </Button>
                </div>
                
                <div className="mt-24 flex justify-center animate-bounce">
                    <DiscoverArrow
                        content={"Learn more about me"}
                        targetId={"career-section"}
                    />
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