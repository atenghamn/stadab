import React, { createContext, useReducer } from "react";


export const EmailContext = createContext();

const emailReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_EMAIL': 
            return {...state, email: action.payload}

        default:
            return state
    }
}

export function EmailProvider({ children }) {
   const [state, dispatch] = useReducer(emailReducer, {email: "no email" })

   const changeEmail = (email) => {
       dispatch({type: 'CHANGE_EMAIL', payload: email})
   }

    return (
        <EmailContext.Provider value={{ ...state, changeEmail}}>
            {children}
        </EmailContext.Provider>
    )
}

