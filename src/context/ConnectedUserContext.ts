import React from "react"
import User from "../domain/User"

const connectedUser: User = undefined
const setConnectedUser: (user: User) => void = () => { }
export const ConnectedUserContext = React.createContext({connectedUser, setConnectedUser})
