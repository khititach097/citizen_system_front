import React from "react";
export interface IOption {
    key?:string ,
    value:string | number,
    label:React.ReactNode,
}


export interface IRadio {
    children:string | React.ReactNode
    value:string | number | boolean
    classNameRadioButton?:string;
}