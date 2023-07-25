import defaultImage from '@/public/img/default.png'

// getImage finds the first banner of with the fullWidthType of image
export const getImage = (formDetails: any): string => {
	const {header = { children: []}} = formDetails.fields

	
	const banner = header.children.find((item: any) => item.type === 'banner' && item.attributes.fullWidthType === 'image')
	
	if (!banner?.attributes?.image) {
		return defaultImage.src
	}

	return `https://cdn.uploads.webconnex.com/130981/${banner?.attributes?.image}`
}

// getText finds the first textParagraph with the key of textParagraph
export const getText = (formDetails: any): string => {
	const {header = { children: []}} = formDetails.fields
	let text = header.children.find((item: any) => item.type === 'textParagraph' && item.key === 'textParagraph')
	// strip out style attributes from html tags
	let htmlText = text?.attributes?.text
	// replace span tags with p tags

	return htmlText?.replace(/style=\".*"/gm,'') || ''
}

// getEventType returns the event type
export const getEventType = (formDetails: any): string => {
	const {tickets = {}} = formDetails.fields
	return tickets.eventType || ''
}

export const getEventDates = (formDetails: any): any[] => {
	const {tickets = { events: {options: []}}} = formDetails.fields
	return tickets.events.options || []
}

export const showDescription = (eventType: string): boolean => {
	if (eventType === "multiple") {
		return process.env.MULTI_EVENT_DISPLAY_DESCRIPTION === 'true'
	}
	return process.env.DISPLAY_DESCRIPTION === 'true'
}

export const getTriggers = (formDetails: any): any[] => {
	const {triggers = []} = formDetails.fields
	return triggers
}

export const checkActions = (item: any, triggers: any[]) : boolean => {

	let retVal = false
	// get all the triggers that match on the condition path
	const matchingTriggers = triggers.filter((trigger: any) => {
		// check the condition path against the event
		const conditions = trigger.conditions.find((condition: any) => {
			return condition.path.includes(item.event)
		})

		return conditions || false
	})

	if (matchingTriggers.length === 0) {
		return true
	}

	matchingTriggers.forEach((trigger: any) => {
		// check the action path against the event
		const action = trigger.actions.find((action: any) => {
			return action.paths.includes(item.path)
		})

		if (action?.name === 'show') {
			retVal = true
			return
		}
		
	})
	
	return retVal
}