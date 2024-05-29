"use client";
import { SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

function NextSnackbarProvider({ children }: { children: ReactNode }) {
    return (
        <SnackbarProvider>
            {children}
        </SnackbarProvider>
    );
}
export default NextSnackbarProvider;