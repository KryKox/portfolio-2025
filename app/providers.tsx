import {PropsWithChildren} from "react";


export const Providers = (props: PropsWithChildren) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

