'use client'

import { AppContext } from '@/app/context/AppContext';
import styleHome from './home.module.css';
import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { RegexUtils } from '@/app/utils/regex';


export default function HomeComponent(){
    
    let {data} = useContext(AppContext);
    let mainContent: MutableRefObject<null | HTMLElement> = useRef(null);
    useEffect(() => {
        if(mainContent.current){
            console.log(data?.footerHeight);
            mainContent.current.style.height = `calc(100dvh - ${data?.heightHeader + data?.footerHeight}px)`;
            mainContent.current.style.marginTop = `${data?.heightHeader}px`;
        }
    },[data]);

    return (
        <main ref={mainContent} className={styleHome.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi qui nihil ad amet eveniet a, nam, veritatis earum, odio voluptates tempora vero? Temporibus illum blanditiis, mollitia consequatur rem suscipit modi eligendi quo similique aut possimus magni, aliquam optio minima, at eaque necessitatibus et corporis dolore dignissimos? Amet perspiciatis nulla commodi est quae repudiandae earum ipsum iste distinctio beatae vero, officia sit unde ab voluptatum molestiae mollitia? Officiis ipsam nostrum cum, est possimus ad, quis ipsa reiciendis consequatur quo, eaque accusamus suscipit voluptas illo asperiores maiores ut. Maiores obcaecati vel, illum doloribus assumenda sint provident est cupiditate blanditiis, natus quidem?
        </main>
    );
}