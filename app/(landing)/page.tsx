import {Header} from "@/landing/components/header";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
    return (
        <div>

            <Header />
        </div>
    );
}