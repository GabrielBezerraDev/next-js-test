'use client'

import { Context,MutableRefObject,useLayoutEffect, useRef, useState, useContext, useEffect } from 'react';
import styleHeader from './header.module.css';
import { createContext } from 'react';
import { AppContext } from '@/app/context/AppContext';
import { RegexUtils } from '@/app/utils/regex';


export function Header(){

    let {updateState} = useContext(AppContext);

    
    const [height,setHeight] = useState(0);


    const headerElement:MutableRefObject<null | HTMLElement> = useRef<null | HTMLElement>(null);
    useEffect(() => {
        if (headerElement.current) {
            setHeight(RegexUtils.regexGetOnlyNumbers(getComputedStyle(headerElement.current).height));
            updateState({
                data: {heightHeader: height}
            })    
        }
    }, [height]);

    return (
        <header ref={headerElement} className={styleHeader.header}>
            <div className={styleHeader.section1}>
                <img className={styleHeader.img} src='flex.png'></img>
            </div>
            <div className={styleHeader.section2}>
                <p>
                    Lorem ipsum dolor sit amet 
                </p>
            </div>
        </header>
    );
}