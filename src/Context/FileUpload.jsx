import { createContext, useState } from "react";

export const FileUploadContext = createContext(null);

export const FileUploadProvider = (props)=>{

    const [file, setFile] = useState(null);

    return (
        <FileUploadContext.Provider value={{file,setFile}}>
            {props.children}
        </FileUploadContext.Provider>
    )
}