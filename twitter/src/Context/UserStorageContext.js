import React from "react";


const userFromStorage=localStorage.getItem("uid")

export const UserStorageContext=React.createContext({userFromStorage:userFromStorage})