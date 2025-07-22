import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {cn} from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

export type ProfessionnalCareerCardProps = {
    logo: string;
    companyName: string;
    status: "Intern" | "CEO";
    dateStart: Date;
    dateEnd?: Date;
    showOnlyYear?: boolean;
};

const formatDate = (date: Date, onlyYear: boolean = false) => {
    return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        ...(onlyYear ? {} : { day: "2-digit", month: "long" }),
    });
};

export const ProfessionnalCareerCard = ({logo, companyName, status, dateStart, dateEnd, showOnlyYear = false}: ProfessionnalCareerCardProps) => {
    return (
        <Card className="md:gap-0 bg-background hover:bg-stone-100 dark:bg-stone-950 dark:hover:bg-stone-900 w-full p-4 shadow-sm hover:shadow-zinc-400 dark:hover:shadow-zinc-600 duration-500">
            <div className="flex items-center">
                <div className="w-10 h-10 mr-2 bg-white dark:bg-stone-800 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1 flex items-center justify-center overflow-hidden">
                    <Image
                        src={logo}
                        alt={`Logo de ${companyName}`}
                        width={32}
                        height={32}
                        className="object-contain rounded-lg"
                    />
                </div>
                
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-black dark:text-zinc-100">
                            <span className="font-bold dark:text-zinc-200">
                                {formatDate(dateStart, showOnlyYear)}
                            </span>{" "}
                            -{" "}
                            <span className="font-bold dark:text-zinc-200">
                                {dateEnd ? formatDate(dateEnd, showOnlyYear) : "Maintenant"}
                            </span>
                        </p>
                        <Badge className={cn("text-xs dark:text-white",
                            status === "CEO" ? "bg-blue-400 dark:bg-blue-500" : "bg-green-400 dark:bg-green-500"
                        )}>
                            {status}
                        </Badge>
                    </div>
                    <p className="text-sm">{companyName}</p>
                </div>
            </div>
        </Card>
    );
};
