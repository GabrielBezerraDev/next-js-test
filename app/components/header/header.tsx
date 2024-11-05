'use client'

import { Context,MutableRefObject,useLayoutEffect, useRef, useState } from 'react';
import styleHeader from './header.module.css';
import { createContext } from 'react';

export const HeaderContext: Context<null | string> = createContext<null | string>(null); 

export function Header(){

    const [height,setHeight] = useState('');

    const headerElement:MutableRefObject<null | HTMLElement> = useRef<null | HTMLElement>(null);
    useLayoutEffect(() => {
        if (headerElement.current) {
            setHeight(getComputedStyle(headerElement.current).height);
        }
    }, []);
    return (
        <HeaderContext.Provider value={height}>
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
        </HeaderContext.Provider>
    );
}