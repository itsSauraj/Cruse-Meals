'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link'

interface ClientLinkProps {
    link: {
        name: string,
        link: string
    }
}

const ClientLink: React.FC<ClientLinkProps> = ({ link }) => {

    const path = usePathname()
    
    return (
        <Link href={`/${link.link}`}
            className={`text-white hover:underline font-bold 
                ${path.startsWith(`/${link.link}`) ? 'underline' : ''}
            `}>
            {link.name}
        </Link>
    )
}

export default ClientLink