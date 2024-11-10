import { useMemo } from "react";
import styleInputText from "./inputText.module.css";

export function InputTextComponent(){
    let teste: Array<string> = ["nome","sobrenome","cpf","email","senha","confirmar senha"];

    const inputFields = useMemo(() => {
        return teste.map((value, index) => (
            <div key={index} className="flex flex-col mb-2">
                <label className="font-semibold">{value}</label>
                <input className="rounded-sm" />
            </div>
        ));
    }, []);
    
    return (
        <div className="flex flex-col">
            {inputFields}
        </div>
    );
}