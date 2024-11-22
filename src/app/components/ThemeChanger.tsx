"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from "react-icons/md";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    const [isClient, setIsClient] = useState<boolean>(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className='space-x-4'>
            {
                isClient
                   && (<>
                        <span>The current theme is: {theme}</span>
                        <button onClick={() => setTheme('light')}><CiLight /></button>
                        <button onClick={() => setTheme('dark')}><MdDarkMode /></button>
                    </>)
                    
            }
        </div>
    )
}

export default ThemeChanger;

