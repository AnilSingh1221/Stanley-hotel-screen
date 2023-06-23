import React from 'react';
import Status from './status';
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
					<li key={idx} className="p-2">
						{formatDateTime(event.date, event.time, event.remaining)} <Status remaining={event.remaining} />
					</li>
						
					)
			})}
	</ul>)
}

export default Recurring