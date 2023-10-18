import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    title?: string;
    btnStyle?: "button" | "submit",
    containerStyle?: string;
    textStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
