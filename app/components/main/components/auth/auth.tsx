'use client'
import { useEffect, useRef } from "react";
import styleAuth from "./auth.module.css"
import { UtilsMainComponent } from "../../utils.main.component";
import {InputTextComponent } from "@/app/shared/components/InputText/inputText";

interface AuthComponentProps {
    styleData: Record<string,any>; // Definindo o tipo da prop styleData
}

export const AuthComponent: React.FC<AuthComponentProps> = ({ styleData }) => {
    const teste = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(teste.current){
            UtilsMainComponent.setHeightAndMargin<HTMLDivElement>(teste.current, styleData.marginTop,styleData.minHeight);
        }
    }, [styleData.marginTop,styleData.minHeight]);
    return (
        <main ref={teste} className="flex justify-center pt-20" >
            <div className="w-1/6 bg-red-200 p-10 h-fit">
                <div className="w-full pb-5">
                    <h3>Login</h3>
                </div>
                <InputTextComponent></InputTextComponent>
            </div>
        </main>
    );
}