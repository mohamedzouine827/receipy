import React from 'react';
import '@/styles/globals.css';
import RootLayout from '@/pages/components/Layout';

type Props = {
    Component: React.ComponentType;
    pageProps: any;
};

function App({ Component, pageProps }: Props) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}

export default App;