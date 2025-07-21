import {AcademicCareerCard} from "@/landing/components/academic-career-card";
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
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-1/2">
                        <AcademicCareerCard/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ProfessionnalCareerCard/>
                    </div>
                </div>
            </div>
        </section>
    );
};
