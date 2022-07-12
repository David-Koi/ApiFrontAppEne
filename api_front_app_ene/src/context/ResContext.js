import React from "react";

export const ResCtx = React.createContext();

export default function ResContext({children}){

    let apiRes;

    return <ResCtx.Provider value={apiRes}>{children}</ResCtx.Provider>;
}