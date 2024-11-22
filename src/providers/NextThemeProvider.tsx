import { ThemeProvider, ThemeProviderProps } from 'next-themes'
// import { ReactNode } from 'react'

export default function NextThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <ThemeProvider {...props}> {children} </ThemeProvider>
    )
}
