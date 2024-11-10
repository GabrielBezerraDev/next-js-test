// 'use client'

export class UtilsMainComponent{
    public static setHeightAndMargin<T extends HTMLElement>(element:T,marginTop:string,minHeight:string):void{
        element.style.minHeight = minHeight;
        element.style.marginTop = marginTop;
    }   
} 
