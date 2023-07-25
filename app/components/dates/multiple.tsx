import * as React from 'react';
import { sumInventory } from './utils';
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

const Multiple:React.FC<Props> = ({eventDates, eventType, inventory, triggers}) => {
	if (eventType !== 'multiple') {
		return null
	}

	// Filter out actions as needed
	inventory = inventory.filter((item: any) => {
		return checkActions(item, triggers)
	})

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