import * as React from 'react';
import { formatDate, formatDateTime, sumInventory } from './utils';
import ListItem from './list-item';
import { match } from 'assert';
import { checkActions } from '@/app/utils/fields';

interface Props {
	eventType: string
	eventDates: any[]
	inventory: any[]
	timeZone: string
	triggers: any[]
}

const Multiday:React.FC<Props> = ({eventDates, eventType, inventory, triggers}) => {
	if (eventType !== 'multiday') {
		return null
	}

	
	console.log("MultiDay", eventDates, inventory)

	// Filter out actions as needed
	inventory = inventory.filter((item: any) => {
		return checkActions(item, triggers)
	})

	return (
		<ul className="text-left divide-y">
			{eventDates.map((event: any, idx: number) => {
				if (event.visible === true) {
					const {remaining} = sumInventory(event.key, inventory)
					
					return (
						<ListItem key={idx} label={formatDate(event.date, '', event.remaining)} remaining={remaining} type={eventType} />
					)
				}
			}
			)
			}
	</ul>)
}

export default Multiday