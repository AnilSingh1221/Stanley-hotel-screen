import React from 'react';
import ListItem from './list-item';
import { 
	checkLimitCapacityActions, 
	filterInventory, 
	formatDateTime,
	filterHide,
} from './utils';

interface Props {
	eventType: string
	inventory: any[]
	timeZone: string
	triggers: any[]
}

const Recurring:React.FC<Props> = ({eventType, inventory, timeZone, triggers}) => {
	
	// build path for timeslot
	const buildPath = (time: string) => {
		return `tickets.timeslot.${time}`
	}

	const calculateRemaining = (sold: number, quantity: number, remaining: number) => {
		// if quantity is zero then we haven't actually sold any tickets
		// and we haven't overridden the value with an action
		//  and need to honor the remaining value
		if (quantity === 0) {
			return remaining
		}

		// otherwise we need to calculate the remaining value
		return quantity - sold
	}

	

	const processInventory = (inventory: any[], triggers: any[]) => {
		// Filter out actions as needed
		inventory = inventory.map((item: any) => {
			return checkLimitCapacityActions(item, triggers)
		})

		return inventory.map((item: any) => {
			// calculate remaining
			const remaining = calculateRemaining(item.sold, item.quantity, item.remaining)

			return {
				...item,
				remaining
			}
		})
	}

	if (eventType !== 'recurring') {
		return null
	}
		
	const filteredInventory = filterInventory(inventory, timeZone, triggers)

	if (filteredInventory.length === 0) {
		return (
			<div className="text-center text-gray-500">
				<p>No dates currently available</p>
			</div>
		)
	}

	return (
		<ul className="text-left divide-y">
			{processInventory(filteredInventory, triggers).map((event: any, idx: number) => {
				return (
					<ListItem key={idx} label={formatDateTime(event.date, event.time, event.remaining)} remaining={event.remaining} type={eventType} />					)
			})}
	</ul>)
}

export default Recurring
