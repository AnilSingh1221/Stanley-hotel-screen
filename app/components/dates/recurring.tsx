import React from 'react';
import ListItem from './list-item';
import { filterInventory, formatDateTime } from './utils';

interface Props {
	eventType: string
	eventDates: any[]
	inventory: any[]
	timeZone: string
}

const Recurring:React.FC<Props> = ({eventDates, eventType, inventory, timeZone}) => {
	
	if (eventType !== 'recurring') {
		return null
	}

	const filteredInventory = filterInventory(inventory, timeZone)
	
	return (
		<ul className="text-left divide-y">
			{filteredInventory.map((event: any, idx: number) => {
				return (
					<ListItem key={idx} label={formatDateTime(event.date, event.time, event.remaining)} remaining={event.remaining} type={eventType} />					)
			})}
	</ul>)
}

export default Recurring