import React, { useMemo } from 'react'
import Card from '../card';
import Multiple from '../dates/multiple';
import Recurring from '../dates/recurring';
import { getForm, getInventory } from '@/app/utils/api';
import { getImage, getText, getEventType, getEventDates } from '@/app/utils/fields';
import Description from '../card/description';
import Link from '../card/link';
import QRCode from '../card/qrcode';


interface Props {
	form: any;
}

const FormCard: React.FC<Props> = async ({ form }) => {
	// get the form and inventory
	const [formDetails, inventory] = await Promise.all([getForm(form.id), getInventory(form.id)])
	
	const image = getImage(formDetails)
	const text = getText(formDetails)
	const eventType = getEventType(formDetails)
	const eventDates = getEventDates(formDetails)

	const displayLink = process.env.DISPLAY_TICKET_LINK === "true" ? true : false
	const displayQRCode = process.env.DISPLAY_QRCODE === "true" ? true : false
	
	return (
		<Card
			title={formDetails.name}
			image={image}
		>	
			{ displayQRCode ? <QRCode url={`https://${formDetails.publishedPath}`} title={formDetails.name} /> : null }
			<Description text={text} type={eventType} />
			<Multiple
				eventType={eventType}
				eventDates={eventDates}
				inventory={inventory}
				timeZone={formDetails.timeZone}
				/>
			
			<Recurring
				eventType={eventType}
				eventDates={eventDates}
				inventory={inventory}
				timeZone={formDetails.timeZone}
				/>
			
			{ displayLink ? <Link link={`https://${formDetails.publishedPath}`} label={"Get Tickets"} /> : null }
		</Card>
	)
}

export default FormCard