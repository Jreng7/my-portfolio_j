/* eslint-disable @next/next/no-page-custom-font */

import MainHeader from '@/src/shared/components/header';
import '@thonlabs/ui/core/base.css';

type Props = {
    children: React.ReactNode;
}

export default function Index({children}: Props) {
    return <html lang="pt-br">
        <head>
            <title>My Portfólio</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
        </head>
        <body>
            <Header />
            {children}
        </body>
    </html>
}