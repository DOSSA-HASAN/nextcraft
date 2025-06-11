'use client'
import React from 'react'
import { useTheme } from '@/components/themeProvider';
import { clientSideFunciton } from '@/utils/client-utils';

function ClientRoute() {

    const result = clientSideFunciton()

    const theme = useTheme()
    return (
        <>
            <p>{result}</p>
            <h1 style={{ backgroundColor: theme.colors.secondary, color: theme.colors.primary }}>Carousel From React-Slick</h1>
        </>
    )
}

export default ClientRoute
