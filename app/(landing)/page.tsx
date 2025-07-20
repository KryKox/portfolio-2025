import {HeaderSection} from "@/landing/header-section";
import {HeroSection} from "@/landing/hero-section";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
    return (
        <div>
            <HeaderSection />
            <HeroSection />
        </div>
    );
}