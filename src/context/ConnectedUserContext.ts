import React from "react"
import User from "../domain/User"

export const connectedUser: User = undefined
export const setConnectedUser: (user: User) => void = undefined
export const ConnectedUserContext = React.createContext({connectedUser, setConnectedUser})
