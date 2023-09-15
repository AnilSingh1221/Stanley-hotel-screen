import {format} from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import React from 'react';

export const getInventoryByEvent = (ticketKey: string, inventory: any[]): any[] => {
	
	return inventory.filter((item: any) => item.event === ticketKey)
}

type TotalInventory = {
	quantity: number
	sold: number
	remaining: number
}

export const sumInventory = (ticketKey: string, inventory: any[]): TotalInventory => {
	const totalInventory: TotalInventory = getInventoryByEvent(ticketKey, inventory).reduce((acc: any, item: any) => {
		acc.quantity += item.quantity
		acc.sold += item.sold
		acc.remaining += item.remaining
		return acc
	}, {quantity: 0, sold: 0, remaining: -1})
	return totalInventory
}

export const filterInventory = (inventory: any[], timeZone: string) => {
	const limit: number = (process.env.DISPLAY_COUNT || 16) as number
	// filter out any past times - date and time our past
	const now = new Date()
	const filtered = inventory.filter((item: any) => {
		// date in form timezone
		const datetimeStr = item.date + ' ' + item.time + ':00'
		
		// convert to UTC equivalent
		const utcTime = zonedTimeToUtc(datetimeStr, timeZone)
		return  utcTime >= now
	})

	// return only 10 results
	return filtered.slice(0, limit)
}

export const formatDateTime = (date: string, time: string, remaining: number) => {
	const datetimeStr = date + ' ' + time + ':00'
		
		return <span className={remaining === 0 ? 'line-through decoration-gray-500' : ''}>{format(new Date(datetimeStr), 'E, MMMM d - h:mm a')}</span>
}

export const formatDate = (date: string, time: string, remaining: number) => {
	const datetimeStr = date
		
		return <span className={remaining === 0 ? 'line-through decoration-gray-500' : ''}>{format(new Date(datetimeStr), 'E, MMMM d')}</span>
}

export const findLimitCapacityActions = (triggers: any[]) => {
	// if there are no actions then we can return the item
	if (triggers.length === 0) {
		return []
	}

	// collect all the actions the triggers that have an action
	// with a name of limitCapacity
	return triggers.filter((trigger: any) => {
		const actions = trigger.actions.filter((action: any) => {
			return action.name === 'limitCapacity'
		})
		return actions.length > 0
	})
}

export const checkCapacityConditions = (item: any, triggers: any[]) => {
	// if there are no actions then we can return the item
	if (triggers.length === 0) {
		return item
	}

	const foundActions = triggers.filter((trigger: any) => {
		// collect all the conditions that match
			const conditions = trigger.conditions.filter((condition: any) => {
			
				switch (condition.name) {
					case 'dateIs':
						const conditionDate = format(new Date(condition.value), 'yyyy-MM-dd')
						return conditionDate === item.date
					case 'selectionIs':	
						return condition.value.includes(item.time)
				}	
			})
			
			return (conditions.length === trigger.conditions.length && trigger.all)
	})
	return foundActions
}


export const checkLimitCapacityActions = (item: any, triggers: any[]) => {
	// if there are no actions then we can return the item
	if (triggers.length === 0) {
		return item
	}

	// collect all the actions the triggers that have an action
	// with a name of limitCapacity
	const limitCapacityActions = findLimitCapacityActions(triggers)



	// if there are no limitCapacity actions then we can return the item
	if (limitCapacityActions.length === 0) {
		return item
	}

	const matches = checkCapacityConditions(item, limitCapacityActions)

	if (matches.length === 1 && matches[0].actions.length > 0) {
		item.quantity = matches[0].actions[0].value * 1
	}

	return item
}