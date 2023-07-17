"use client"
import { styled } from "styled-components"

const Button = styled.button`
    display: flex;
    width: 450px;
    height: 59px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #D69797;
    border: none;
    color: #FFF;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0 0 18px 0;
    cursor: pointer;
`

export default function Btn({children, ...rest}){
    return(
        <Button {...rest} >{children}</Button>
    )
}