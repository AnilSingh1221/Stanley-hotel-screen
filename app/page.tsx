import Image from 'next/image';
import FormCard from './components/form-card';
import { getForms } from '@/app/utils/api';

export const revalidate = 60
// no cache


type Props = {
	searchParams: any
	params: any
}

const Home:React.FC<Props> = async ({searchParams}) => {
	const formOrder = searchParams.order ? searchParams.order : []
	const limit = searchParams.limit ? parseInt(searchParams.limit) : 100
	const displayLogo = searchParams.logo === 'true' ? true : false
	const displayLogoBottom = searchParams.logoBottom === 'true' ? true : false
	const displayMainTitle = searchParams.title === 'true' ? true : false
	
	const forms = await getForms(limit, formOrder)

  return (
		<div className="text-gray-900 bg-gray-100">
		  <div className="container mx-auto px-0 py-2 pt-10">

			{ displayLogo && !displayLogoBottom && <Image className="mx-auto h-24 w-48 mb-4" src="/img/logo.png" width={300} height={144} alt="The Stanley Hotel" />}
		
		    { displayMainTitle && <h1 className="text-4xl text-center uppercase font-bold mb-6 text-gray-900">Upcoming Events</h1>}
    
		    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6">
					{(forms || []).map((form: any, idx: number) => (
						<FormCard key={idx} form={form} searchParams={searchParams}/> 
						))}
				</div>
    
				{ displayLogo && displayLogoBottom && <Image className="mx-auto h-24 w-48 mt-12" src="/img/logo.png" width={300} height={144} alt="The Stanley Hotel" />}
		</div>
	</div>
  )
}

export default Home