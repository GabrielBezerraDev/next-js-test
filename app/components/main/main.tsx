'use client'

import { HomeComponent } from './components/home/home';
import { AuthComponent } from './components/auth/auth';
import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '@/app/context/AppContext';


export default function MainComponent(){
    
    let {data} = useContext(AppContext);
    const [minHeight, setMinHeight] = useState('');
    const [marginTop, setMarginTop] = useState('');
    let cache: boolean  = false;
    useEffect(() => {
            setMinHeight(`calc(100dvh - ${data?.heightHeader + data?.footerHeight}px)`);
            setMarginTop(`${data?.heightHeader}px`);
    },[data]);



    return cache ? (<HomeComponent styleData={{marginTop: marginTop,minHeight:minHeight}}/> ) : (<AuthComponent styleData={{marginTop:marginTop,minHeight:minHeight}}/>);
}