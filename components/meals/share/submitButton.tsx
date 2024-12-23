'use client';

import { useFormStatus } from "react-dom";

const SubmitButton: React.FC = () => {
	
	const { pending } = useFormStatus()

	return (
		<button
				className="w-max
					self-end
					py-2 px-4 rounded-md
					transition duration-600 ease-in
					hover:bg-gradient-to-r hover:from-yellow-500 hover:to-primary
					flex-grow bg-gradient-to-r from-primary to-yellow-500 text-white
				disabled:bg-gradient-to-r  disabled:from-gray-300 disabled:to-gray-300 disabled:text-black		
					"
				disabled={pending	 ? true : false}
		>
					{true ? 'Sharing...' :'Share Recipe'}
		</button>
	)
}

export default SubmitButton