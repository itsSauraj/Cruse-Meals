import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/logo.png'
import header_svg from '@/assets/svgs/header.svg'
import NavLinks from './nav-links'

const MainHeader = () => {
    return (
        <>
            <Image src={header_svg} alt="header" layout='fill' objectFit='cover' priority
                className='absolute top-0 left-0 z-[-1]'
            />
            <header className='flex justify-between items-center p-4  text-white'>
                <div className='flex items-center space-x-4' >
                    <Link href={'/'}>
                        <Image src={logo} alt="logo" width={60} height={60} priority/>
                    </Link>
                    <h1 className='text-2xl font-bold'>Cruse Meals</h1>
                </div>
                <NavLinks />
            </header>
        </>
    )
}

export default MainHeader