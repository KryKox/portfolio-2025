import {AcademicCareerCard, AcademicCareerCardProps} from "@/landing/components/academic-career-card";
import {ProfessionnalCareerCard} from "@/landing/components/professionnal-career-card";
import * as React from "react";

export const CareerSection = () => {
    return (
        <section
            id={"career-section"}
            className="bg-gradient-to-b pb-8 from-white to-slate-50 dark:bg-gradient-to-b dark:from-black dark:to-zinc-900  mx-auto  w-full overflow-hidden "
            aria-label="Career section"
        >
            <div className="container mx-auto max-w-5xl">
                <div className="flex justify-center mb-8">
                    <p
                        className="text-secondary-foreground bg-secondary/90 hover:bg-secondary relative rounded-full border px-3 py-1 text-sm whitespace-nowrap shadow-sm transition-colors duration-300"
                        aria-label="Learn about our new Interactive Data Dashboard feature"
                        role="banner"
                    >
                        <span className="text-primary">🎓 My Career</span>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full  flex flex-col gap-3">
                        {ACADEMIC_ITEMS.map((item, key) => {
                            return (
                                <AcademicCareerCard
                                    key={key}
                                    logo={item.logo}
                                    academicName={item.academicName}
                                    degree={item.degree}
                                    alternance={item.alternance}
                                    dateStart={item.dateStart}
                                    dateEnd={item.dateEnd}
                                />
                            )
                        })}
                    </div>
                    
                    <div className="w-full md:w-1/2 flex flex-col gap-3">
                    </div>
                        <ProfessionnalCareerCard/>
                </div>
            
            </div>
        </section>
    );
};

const ACADEMIC_ITEMS: AcademicCareerCardProps[] = [
    {
        logo: "/lpo-touchard-logo.png",
        academicName: "Touchard Washington  High School",
        degree: "Bac Pro SN",
        alternance: false,
        dateStart: 2019,
        dateEnd: 2022
    },
    {
        logo: "/logo-malraux.png",
        academicName: "André Malraux High School",
        degree: "BTS SIO SLAM",
        alternance: false,
        dateStart: 2022,
        dateEnd: 2024
    },
    {
        logo: "/ua-angers-logo.png",
        academicName: "University of Angers",
        degree: "LP Web",
        alternance: false,
        dateStart: 2024,
        dateEnd: 2025
    },
    {
        logo: "/live-campus.png",
        academicName: "Live Campus",
        degree: "MS Dev Fullstack",
        alternance: true,
        dateStart: 2025,
        dateEnd: 2027
    }
]
