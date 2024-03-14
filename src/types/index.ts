import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    title?: string;
    btnStyle?: "button" | "submit",
    containerStyle?: string;
    textStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    style?: string;
    alt?: string;
}

export interface Question {
    id: string;
    question?: string;
    options: string[];
    correct_answer: string;
}