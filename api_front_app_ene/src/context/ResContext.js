import React, {useState} from "react";

export const ResCtx = React.createContext();

export default function ResContext({children}){

    const [apiRes, setApiRes] = useState();

    const apiResCtx = {
        apiRes,
        setApiRes,
    }

    return <ResCtx.Provider value={apiResCtx}>{children}</ResCtx.Provider>;
}