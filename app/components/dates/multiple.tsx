import * as React from 'react';
import { format, addDays } from 'date-fns';
import Status from './status';
import { formatDateTime, sumInventory } from './utils';

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

						<li key={idx} className="p-2">
							{event.attributes?.label} <Status remaining={remaining} type={eventType} />
						</li>
					)
				}
			}
			)
			}
	</ul>)
}

export default Multiple