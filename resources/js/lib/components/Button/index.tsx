import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({...rest}: ButtonProps) {
    return (
        <button {...rest} id="btn">Clique aqui</button>
    )
}
