'use client'
import { useEffect, useRef } from "react";
import styleAuth from "./auth.module.css"
import { Button } from "@/components/ui/button"
import { UtilsMainComponent } from "../../utils.main.component";
import {FormComponent } from "@/app/shared/components/InputText/FormComponent";
import { useForm } from "react-hook-form";

interface AuthComponentProps {
    styleData: Record<string,any>; 
}

export const AuthComponent: React.FC<AuthComponentProps> = ({ styleData }) => {
    const teste = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(teste.current){
            UtilsMainComponent.setHeightAndMargin<HTMLDivElement>(teste.current, styleData.marginTop,styleData.minHeight);
        }
    }, [styleData.marginTop,styleData.minHeight]);
    return (
        <main ref={teste} className="flex justify-center pt-10" >
            <div className="w-3/12 bg-slate-50 shadow-lg p-10 h-fit border-2 border-slate-300">
                <div className="w-full pb-5">
                    <h3 className="font-semibold">Login</h3>
                </div>
                <div className="w-6/6 ps-5">
                    <FormComponent form={{inputs:[{label:"teste",keyIdentificator:"teste"}]}}></FormComponent>
                </div>
                <Button className="bg-blue-600 mt-5">Entrar</Button>
            </div>
        </main>
    );
}