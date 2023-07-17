'use client'
import { styled } from "styled-components"

const Input = styled.input`
    width: 450px;
    height: 59px;
    display: inline-flex;
    align-items: center;
    border-radius: 10px;
    background: rgba(214, 151, 151, 0.20);
    border: none;
    box-sizing: border-box;
    margin: 0 0 18px 0;
    font-size: 20px;
    text-indent: 20px;
    font-weight: 600;
    font-family: Poppins;
    &:focus {
    outline: none;
    }
    &::placeholder{
    color: rgba(0, 0, 0, 0.20);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
`

export default function LoginInput({...rest}){
    return(
        <Input {...rest}/>
    )
}