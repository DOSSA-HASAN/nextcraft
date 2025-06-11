'use client'
import React, { createContext, useContext } from 'react'

type theme = {
    colors: {
        primary: string;
        secondary: string;
    }
}

const defaultTheme: theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d"
    }
}

const ThemeContext = createContext<theme>(defaultTheme)

function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(){
    return useContext(ThemeContext)
}

export { useTheme, ThemeProvider}