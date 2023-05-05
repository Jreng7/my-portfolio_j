import Image from 'next/image'
import { Text } from 'thon-ui'
import profileJ from './assets/perfil-josue.png'

export default function MainHeader() {
    return <header className="w-full lg:w-[26.5rem] xl:w-[34.25rem] flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="flex items-center gap-3">
            <Image 
            src={profileJ} 
            alt="Foto de perfil do Josué Ribeiro" 
            className="w-[5.5rem] h-[5.5rem]"
            />
            <div>
                <Text as="h1" variant="3xl" className='text-gray-800'>
                    Josué Ribeiro
                </Text>
                <Text as="div" variant="xs" className="text-gray-500 italic -mt-0.5">
                    Developer Fullstack @2023/Jrway
                </Text>
            </div>
        </div>
    </header>
}