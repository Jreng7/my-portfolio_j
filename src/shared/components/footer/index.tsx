import { Text } from '@thonlabs/ui';

export default function Footer(){

     const linkClassName = 'text-gray-500 hover:text-gray-800 transition-all duration-200ms ease-in-out'

    return (
        <footer className="flex justify-between items-center">
            <div className="flex flex-col">
                <Text className="text-gray-800 italic font-black">Jo!</Text>
                <Text variant="xs" className="text-gray-500">josue@jacriber.io | 2023</Text>
            </div>
            <nav>
                <ul className="flex gap-3">
                    <li><a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer" className={linkClassName}>Youtube</a></li>
                    <li><a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer" className={linkClassName}>Twitter</a></li>
                    <li><a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer" className={linkClassName}>LinkedIn</a></li>
                    <li><a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer" className={linkClassName}>Instagram</a></li>
                </ul>
            </nav>
        </footer>
    )
}