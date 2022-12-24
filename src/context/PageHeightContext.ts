import React from "react"

const setWindowHeight: (height: number) => void = _ => { }
export const WindowHeightContext = React.createContext({windowHeight: 0, setWindowHeight})
