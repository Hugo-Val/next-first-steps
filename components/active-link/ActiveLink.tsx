'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface Props {
    name: string,
    path: string
}

export const ActiveLink = ({name, path}:Props) => {
    
    const pathName = usePathname();
    
    return  (
        <Link 
            className={`${style.link} ${(pathName === path) && style['link-active']} `}
            href={path} >
            {name}
        </Link>
    )
        
    };
