'use client'
import { useRef } from "react";

interface AuthComponentProps {
    styleData: Record<string,any>; // Definindo o tipo da prop styleData
}

export const AuthComponent: React.FC<AuthComponentProps> = ({ styleData }) => {
    console.log("AuthComponent" + styleData.marginTop);
    return (
        <div>
            tela de login
        </div>
    );
}