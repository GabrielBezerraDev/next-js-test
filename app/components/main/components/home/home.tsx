'use client'

import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import { UtilsMainComponent } from "../../utils.main.component";

interface HomeComponentProps {
    styleData: Record<string,any>;  // Definindo o tipo da prop styleData
}


export const HomeComponent: React.FC<HomeComponentProps> = ({ styleData }) => { 
    const teste = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(teste.current){
            UtilsMainComponent.setHeightAndMargin<HTMLDivElement>(teste.current, styleData.marginTop,styleData.minHeight);
        }
    }, [styleData.marginTop,styleData.minHeight]);

    return (
        <div ref={teste}>
            tela de home
        </div>
    );
}