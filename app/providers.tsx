import {PropsWithChildren} from "react";

export type ProvidersProps = {};

export const Providers = (props: PropsWithChildren) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

