import React from 'react';
import Image from 'next/image'

interface Props {
	title?: string;
	image?: string;
	subtitle?: string;
	qrCode?: string;
	children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, image, qrCode, children}) => {
	return (
		<div className="bg-white rounded-lg shadow-md text-center">
						<h2 className="lg:text-3xl md:text-xl sm:text-3xl title uppercase text-center w-full bg-black text-bold text-white p-4 mx-auto">{title}</h2>
						<div className="">
							<Image 
								className="object-cover h-96 md:h-64 lg:h-64 xl:h-96 w-full" 
								src={image as string} 
								alt={title as string}
								width={500}
								height={96} />
						</div>
						{/* <div className="text-left pl-3">
							<h3 className="title uppercase text-center w-full text-3xl bg-black text-bold text-white p-4 mx-auto">Get Tickets</h3>
						</div>
						 */}
						 <div className="text-left pt-3 pl-6 mb-6">
						{children}
						</div>
					</div>
	)
}

export default Card