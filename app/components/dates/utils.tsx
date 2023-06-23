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
	}, {quantity: 0, sold: 0, remaining: 0})
	return totalInventory
}

export const filterInventory = (inventory: any[], timeZone: string) => {
	const limit: number = (process.env.DISPLAY_COUNT || 16) as number
	// filter out any past times - date and time our past
	const now = new Date()
	const filtered = inventory.filter((item: any) => {
		// date in form timezone
		const datetimeStr = item.date + ' ' + item.time + ':00'
		console.log('datetimeStr', datetimeStr)
		// convert to UTC equivalent
		const utcTime = zonedTimeToUtc(datetimeStr, timeZone)
		return  utcTime >= now
	})

	// return only 10 results
	return filtered.slice(0, limit)
}

export const formatDateTime = (date: string, time: string, remaining: number) => {
	const datetimeStr = date + ' ' + time + ':00'
		
		return <span className={remaining === 0 ? 'line-through decoration-gray-500' : ''}>{format(new Date(datetimeStr), 'MMM d, yyyy - h:mm a (E)')}</span>
}