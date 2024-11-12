import React, { useMemo } from "react";
import { useForm, SubmitHandler  } from "react-hook-form";
import {IFormReact, IForm } from "../interfaces/IFormReact";
import styleInputText from "./FormComponent.module.css";
7

interface FormLogin{
    email:string;
    password:string;
}

interface teste{
    form: IForm<FormLogin>
} 

export function FormComponent({ form }: teste):React.ReactElement{
    console.log(form);
    let teste: Array<IFormReact> = [{label:"Email",keyIdentificator:"email"},{label:"Password",keyIdentificator:"password"}];
    const {register, handleSubmit,watch} = useForm<FormLogin>();
    const onSubmit:SubmitHandler<FormLogin> = (data) => {console.log(data)};
    console.log(watch("email"));
    console.log(watch("password")); 
    const inputFields = useMemo(() => {
        return teste.map((value, index) => (
            <div key={index} className="flex flex-col mb-2">
                <label className="font-semibold">{value.label}</label>
                <input className="rounded-sm border-2 ps-3" {...register(value.keyIdentificator as keyof FormLogin)}/>
            </div>
        ));
    }, []);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            {inputFields}
        </form>
    );
}