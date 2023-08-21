'use client'
import Btn from "./commons/Btn"
import {signIn , singOut} from 'next-auth/react'

export default function LoginBtn({children}){
    return(
        <Btn style={{background: "#D69797"}}>{children}</Btn>
    )
}