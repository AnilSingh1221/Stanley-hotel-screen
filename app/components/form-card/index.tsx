import React, { useMemo } from 'react'
import { format, addDays } from 'date-fns'
import Card from '../card';


import { getForm, getInventory, requestOptions } from '@/app/utils/api';
import Multiple from '../dates/multiple';
import Recurring from '../dates/recurring';
import { getImage, getText, getEventType, getEventDates } from '@/app/utils/fields';

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

	const displayDescription = process.env.DISPLAY_DESCRIPTION === "true" ? true : false

	return (
		<Card
			title={formDetails.name}
			image={image}
		>	
			{displayDescription ? <div className="p-3" dangerouslySetInnerHTML={{ __html: text }} /> : null}
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

			
		</Card>
	)
}

export default FormCard