'use client'
import { useContext, useEffect, useRef, useState } from 'react';
import styleFooter from './footer.module.css'
import { AppContext } from '@/app/context/AppContext';
import { RegexUtils } from '@/app/utils/regex';

export default function Footer(){
    let {data,setUpdate} = useContext(AppContext);
    const [footer, setFooterHeight ] = useState(0);
    let teste = useRef<null|HTMLElement>(null);
    useEffect(() => {
        if(data && setUpdate && teste.current && !data.footerHeight){
            setFooterHeight(RegexUtils.regexGetOnlyNumbers(getComputedStyle(teste.current as HTMLElement).height));
            setUpdate({data:{...data,footerHeight:footer}});
        }
    },[data])

    return (
        <footer ref={teste} className={styleFooter.footer}>

        </footer>
    );
}