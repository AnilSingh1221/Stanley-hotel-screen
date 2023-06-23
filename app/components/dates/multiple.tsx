import * as React from 'react';
import { format, addDays } from 'date-fns';
import Status from './status';
import { formatDateTime, sumInventory } from './utils';
import ListItem from './list-item';

interface Props {
	eventType: string
	eventDates: any[]
	inventory: any[]
	timeZone: string
}

const Multiple:React.FC<Props> = ({eventDates, eventType, inventory}) => {
	if (eventType !== 'multiple') {
		return null
	}
	return (
		<ul className="text-left divide-y">
			{eventDates.map((event: any, idx: number) => {
				if (event.attributes?.visible === true) {
					const {remaining} = sumInventory(event.key, inventory)
					return (
						<ListItem key={idx} label={event.attributes?.label} remaining={remaining} type={eventType} />
					)
				}
			}
			)
			}
	</ul>)
}

export default Multiple