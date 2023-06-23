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
		  <div className="container mx-auto px-6 py-8">

				{ displayLogo && <Image className="mx-auto h-36 w-50" src="/img/logo.png" alt="The Stanley Hotel" />}
    
		    { displayMainTitle && <h1 className="text-4xl text-center uppercase font-bold mb-6 mt-6 text-gray-900">Upcoming Events</h1>}
    
		    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6">
					{(forms || []).map((form: any, idx: number) => (<FormCard key={idx} form={form} /> ))}
				</div>
    
		</div>
	</div>
  )
}


// {/* <Card
// 						title="Kevin Nealon"
// 						image="/img/Kevin_Nealon_Insta_1080x1080__2.webp"
// 						qrCode="/qrcodes/qr_kevin-nealon-live-at-the-stanley.png"
// 						subtitle="Get ready to laugh your heart out"
// 					>
						
// 						<div className="p-3">
// 							<h3 className="mt-2 mb-3">Get ready to laugh your heart out</h3>
// 						<h3 className="text-gray-900 text-l text-center font-bold mb-4">Event Details</h3>
// 						<h4><strong>Date:</strong> Friday, May 26, 2023 <br />at <span className="line-through">7:30 PM</span> and 9:15 PM</h4>
// 						{/* <!-- <p className="mt-3">Get ready to laugh your heart out as Comedy Works Entertainment and Stanley Live present Kevin Nealon.</p> --> */}
// 						</div>
// 						</Card>
								
						
// 						<Card
// 							title="Melissa Etheridge"
// 							image="/img/melissaetheridge.jpg"
// 							qrCode="/qrcodes/qr_melissa-etheridge-live-at-the-stanley.png"
// 							subtitle="See Grammy® Award-winning artist"
// 						>
// 							<div className="p-3">
// 								<h3 className="mt-2 mb-3">See Grammy® Award-winning artist</h3>
// 							<h3 className="text-gray-900 text-l text-center font-bold mb-4">Event Details</h3>
// 							<h4><strong>Date:</strong> June 23 & 24, 2023</h4>
// 							{/* <!-- <p className="mt-3">Don't miss your chance to see Grammy® Award-winning artist Melissa Etheridge live at the historic Stanley Hotel.</p> --> */}
// 						</div>
// 						</Card>
	
// 						<Card
// 							title="Historic Day Tour"
// 							image="/img/historic-tour.jpg"
// 							qrCode="/qrcodes/qr_the-historical-day-tour.png"
// 							subtitle="Explore the history of the hotel"
// 						>
// 							<div className="p-3">
// 								<h3 className="mt-2 mb-3">Explore the history of the hotel</h3>
// 							<h3 className="text-gray-900 text-l text-center font-bold mb-4">Event Details</h3>
// 							<h4>Tour Duration: 60 MIN</h4>
// 							<p>AGE LIMIT: 8+<br />
// 								This Tour Is Wheelchair Accessible</p>
// 						</div>
// 						</Card>
	
// 						<Card
// 							title="Spirited Night Tour"
// 							image="/img/night-tour.jpg"
// 							subtitle="Uncover The Spirited Nature Of Our Hotel"
// 							qrCode="/qrcodes/qr_spirited-night-tour.png"
// 						>
// 							<div className="p-3">
// 								<h3 className="mt-2 mb-3">Uncover The Spirited Nature Of Our Hotel</h3>
// 							<h3 className="text-gray-900 text-l text-center font-bold mb-4">Event Details</h3>
// 							<h4>Tour Duration: 60 MIN</h4>
// 							<p>Age Limit: 8+<br />
// 								This Tour Is Wheelchair Accessible</p>
// 							</div>
// 						</Card>
	
// 						<Card
// 							title="King's Cottage Tour"
// 							image="/img/kings-cottage-tour.jpg"
// 							qrCode="/qrcodes/qr_kings-cottage-tour.png"
// 							subtitle="An Hour Long Theatrical Tour Experience At The Stanley Hotel"
// 							>
// 							<div className="p-3">
// 								<h3 className="mt-2 mb-3">An Hour Long Theatrical Tour Experience At The Stanley Hotel</h3>
// 								<h3 className="text-gray-900 text-l text-center font-bold mb-4">Event Details</h3>
// 								<h4>Tour Duration: 60 MIN</h4>
// 								<p>Age Limit: 8+</p>
// 							</div>
// 						</Card>
	
// 						<Card 
// 							title="The Shining Tour"
// 							image="/img/the-shining-tour.jpg"
// 							qrCode="/qrcodes/qr_the-shining-tour.png"
// 							subtitle="An Hour Long Theatrical Tour Experience"
// 						>
// 							<div className="p-3">
// 								<h3 className="mt-2 mb-3">An Hour Long Theatrical Tour Experience</h3>
// 								<h3 className="text-gray-900 text-l text-center font-bold mb-4">Event Details</h3>
// 								<h4>TOUR DURATION: 60 MIN</h4>
// 								<p>AGE LIMIT: 8+</p>
// 								{/* <!-- <h3>An Hour Long Theatrical Tour Experience At The Stanley Hotel</h3>
// 								<p className="mt-3">The Shining Tour, is one of our newest tours. Indoor/Outdoor walking tour through the west side of The Stanley Hotel Campus. </p> --> */}
// 							</div>
// 						</Card> */}