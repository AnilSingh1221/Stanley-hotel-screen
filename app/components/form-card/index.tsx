import React from 'react'

import Card from '../card';
import Multiple from '../dates/multiple';
import Recurring from '../dates/recurring';
import { getForm, getInventory } from '@/app/utils/api';
import { getImage, getText, getEventType, getEventDates, getTriggers } from '@/app/utils/fields';
import Description from '../card/description';
import Link from '../card/link';
import QRCode from '../card/qrcode';
import Multiday from '../dates/multiday';

interface Props {
	form: any;
	searchParams: any
}

const FormCard: React.FC<Props> = async ({ form, searchParams }) => {

	const {qrcode,link } = searchParams
	// get the form and inventory
	const [formDetails, inventory] = await Promise.all([getForm(form.id), getInventory(form.id)])

	const image = getImage(formDetails)
	const text = getText(formDetails)
	const eventType = getEventType(formDetails)
	const eventDates = getEventDates(formDetails)
	const triggers = getTriggers(formDetails)
	const displayLink = link === "true" ? true : false
	const displayQRCode = qrcode === "true" ? true : false
	
	return (
		<Card
			title={formDetails.name}
			image={image}
		>	
			{ displayQRCode && <QRCode url={`https://${formDetails.publishedPath}`} title={formDetails.name} />}
			<Description text={text} type={eventType} />
			<Multiple
				eventType={eventType}
				eventDates={eventDates}
				inventory={inventory}
				timeZone={formDetails.timeZone}
				triggers={triggers}
				/>

			<Multiday
				eventType={eventType}
				eventDates={eventDates}
				inventory={inventory}
				timeZone={formDetails.timeZone}
				triggers={triggers}
				/>
			
			<Recurring
				eventType={eventType}
				inventory={inventory}
				timeZone={formDetails.timeZone}
				/>
			
			{ displayLink ? <Link link={`https://${formDetails.publishedPath}`} label={"Get Tickets"} /> : null }
		</Card>
	)
}

export default FormCard
