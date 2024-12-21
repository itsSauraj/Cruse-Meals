import ClientLink from "./client-link"

const nav_links = [
    {
        name: 'Meals',
        link: 'meals'
    },
    {
        name: 'Community',
        link: 'community'
    }
]


const NavLinks = () => {

    return (
        <nav className='flex items-center space-x-4 text-black'>
            <ul className='flex items-center space-x-4'>
                {nav_links.map((link, index) => (
                    <li key={index} className='text-black'>
                        <ClientLink link={link} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks