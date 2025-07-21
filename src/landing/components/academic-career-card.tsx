import {Badge} from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export type AcademicCareerCardProps = {
    logo: string;
    academicName: string;
    degree: string;
    alternance: boolean;
    dateStart: number;
    dateEnd: number;
};

export const AcademicCareerCard = ({logo, academicName, degree, alternance, dateStart, dateEnd}: AcademicCareerCardProps) => {
    return (
        <Card className="md:gap-0 bg-background hover:bg-stone-100 dark:bg-stone-950 dark:hover:bg-stone-900 w-full p-4 shadow-sm hover:shadow-zinc-400 dark:hover:shadow-zinc-600 duration-500">
            <div className="flex items-center">
                <div className="w-10 h-10 mr-2  bg-white dark:bg-stone-800 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1 flex items-center justify-center overflow-hidden">
                    <Image
                        src={logo}
                        alt={`${academicName}'s logo`}
                        width={32}
                        height={32}
                        className="object-contain rounded-lg"
                    />
                </div>
                
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-black dark:text-zinc-100">
                            <span className={"font-bold dark:text-zinc-200"}>{dateStart}</span> - <span className={"font-bold dark:text-zinc-200"}>{dateEnd}</span>
                        </p>
                        <Badge className="text-xs bg-zinc-200  dark:bg-zinc-700 text-zinc-800 dark:text-white px-2 py-0.5 rounded-full">
                            {degree}
                        </Badge>
                        {alternance ? (
                            <Badge className={"text-xs bg-green-400 dark:bg-green-500 dark:text-white"}>
                                Work-Study
                            </Badge>
                        ) : (
                            <Badge className={"text-xs bg-red-400 dark:bg-red-500 dark:text-white"}>
                                Initial Training
                            </Badge>
                        )}
                    </div>
                    <p className="text-sm">{academicName}</p>
                </div>
            </div>
        </Card>
    );
};
