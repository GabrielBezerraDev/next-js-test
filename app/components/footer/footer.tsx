'use client'
import { useContext, useEffect, useRef, useState } from 'react';
import styleFooter from './footer.module.css'
import { AppContext } from '@/app/context/AppContext';
import { RegexUtils } from '@/app/utils/regex';

export default function Footer(){
    let {updateState} = useContext(AppContext);
    const [footer, setFooterHeight ] = useState(20);
    let teste = useRef<null|HTMLElement>(null);
    useEffect(() => {
        setFooterHeight(RegexUtils.regexGetOnlyNumbers(getComputedStyle(teste.current as HTMLElement).height));
        updateState({
            data: {
                footerHeight: footer
            }
        });
    },[footer])

    return (
        <footer ref={teste} className={styleFooter.footer}>

        </footer>
    );
}