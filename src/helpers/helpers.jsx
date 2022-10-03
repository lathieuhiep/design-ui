import {Container} from "@mui/material";
import {Fragment} from "react";

export const layoutHasSidebar = (hasSidebar) => {
    let Comp = Container

    if ( hasSidebar ) {
        Comp = Fragment
    }

    return Comp
}