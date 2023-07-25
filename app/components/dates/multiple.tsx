import * as React from 'react';
import { sumInventory } from './utils';
import ListItem from './list-item';

interface Props {
	eventType: string
	eventDates: any[]
	inventory: any[]
	timeZone: string
	triggers: any[]
}

const Multiple:React.FC<Props> = ({eventDates, eventType, inventory}) => {
	if (eventType !== 'multiple') {
		return null
	}

	// const checkActions = (event: string) => {
	// 	let conditions: any[] = []
	// 	triggers.forEach((trigger: any) => {
	// 		// check the condition path against the event
	// 		conditions = trigger.conditions.find((condition: any) => {
	// 			return condition.path.includes(event)
	// 		})
	// 	})
	// 	return conditions
	// }

	// inventory = inventory.filter((item: any) => {
	// 	return checkActions(item.event)
	// })

	
	// console.log("inventory", inventory)

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