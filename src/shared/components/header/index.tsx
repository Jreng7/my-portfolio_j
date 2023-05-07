import Image from 'next/image';
import { Text } from '@thonlabs/ui';
import profilePicture from './assets/perfil-josue.png';

export default function Header() {
    return (
        <header className={`
                w-full h-screen lg:w-[26.5rem] xl:w-[34.25rem]
                pt-8 pb-6 px-7 lg:pt-0 lg:pb-0
                flex flex-col justify-center items-center 
                bg-gray-100

            `}>

            <div className='flex gap-4 items-center'>
                <Image 
                    src={profilePicture} 
                    alt="Foto de perfil Josué Ribeiro Jacinto"
                    className='lg:mr-2'
                />
                <div>
                    <Text as="h1" variant="3xl" className="text-gray-800">
                        Josué Ribeiro
                    </Text>
                    <Text as="div" variant="xs" className="text-gray-800 italic -mt-0.5">
                        Fullstack Engineer@JrwayRibeiro
                    </Text>
                </div>
            </div>

            <div className="w-full lg:w-[20rem] mt-6 lg:mt-8">
                <Text as="p" variant="sm" className="italic text-gray-500">
                    Criando coisas incríveis desde 2012, com muita atenção aos detalhes,
                    sentimento de dono e exercendo o feedback.
                </Text>
                <Text as="p" variant="sm" className="italic text-gray-500 mt-2">Você pode me chamar de Jo. 😃</Text>
            </div>
        </header>
        )   
}   