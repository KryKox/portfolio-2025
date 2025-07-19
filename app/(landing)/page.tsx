import {HeaderSection} from "@/landing/header-section";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
    return (
        <div>

            <HeaderSection />
        </div>
    );
}