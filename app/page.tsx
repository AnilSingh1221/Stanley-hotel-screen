import Image from 'next/image';
import FormCard from './components/form-card';
import { requestOptions } from '@/app/utils/api';

const getData = async () => {

	const res = await fetch("https://api.webconnex.com/v2/public/forms?product=ticketspice.com&pretty=true&sort=asc&status=open&datePublishedBefore=2023-06-18", requestOptions)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json()

	return data.data || []
}

export default async function Home() {
	const forms = await getData()
	
	const displayLogo = process.env.DISPLAY_LOGO === 'true' ? true : false
	const displayMainTitle = process.env.DISPLAY_MAIN_TITLE === 'true' ? true : false
	

  return (
		<div className="text-gray-900 bg-gray-100">
		  <div className="container mx-auto px-0 py-2">

				{ displayLogo && <Image className="mx-auto h-12 w-24 mb-4" src="/img/logo.png" width={300} height={144} alt="The Stanley Hotel" />}
    
		    { displayMainTitle && <h1 className="text-4xl text-center uppercase font-bold mb-6 text-gray-900">Upcoming Events</h1>}
    
		    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6">
					{(forms || []).map((form: any, idx: number) => (<FormCard key={idx} form={form} /> ))}
				</div>
    
		</div>
	</div>
  )
}