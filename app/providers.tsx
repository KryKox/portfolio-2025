"use client"

import {Toaster} from "@/components/ui/sonner";
import {ThemeProvider} from "@/theme/theme-provider";
import {PropsWithChildren} from "react";

export const Providers = (props: PropsWithChildren) => {
    return (
        <ThemeProvider
            attribute={"class"}
            defaultTheme={"dark"}
            enableSystem
            disableTransitionOnChange
        >
            <Toaster />
            {props.children}
        </ThemeProvider>
    );
};

