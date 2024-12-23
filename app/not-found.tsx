import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="text-center p-20 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-transparent bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-6xl font-bold">
            Page not found
        </h1>            
        <p>The page or resource you are looking for might not exist or is not available.</p>
        <Link href={'/'}
            className="w-max
        py-2 px-4 rounded-md
        transition duration-600 ease-in
        hover:bg-gradient-to-r hover:from-yellow-500 hover:to-primary
        flex-grow bg-gradient-to-r from-primary to-yellow-500 text-white"
        > Go to home page </Link>
        </div>
    )
}

export default NotFound
