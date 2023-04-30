import '@thonlabs/ui/core/base.css';

type Props = {
    children: React.ReactNode;
}

export default function Index({children}: Props) {
    return <html lang="pt-br">
        <head>
            <title>My Portfólio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </head>
        <body>
            {children}
        </body>
    </html>
}