import defaultImage from '@/public/img/default.png'

export const getImage = (formDetails: any): string => {
	const {header = { children: []}} = formDetails.fields
	const banner = header.children.find((item: any) => item.type === 'banner' && item.key === 'banner')
	
	if (!banner?.attributes?.image) {
		return defaultImage.src
	}

	return `https://cdn.uploads.webconnex.com/130981/${banner?.attributes?.image}`
}

export const getText = (formDetails: any): string => {
	const {header = { children: []}} = formDetails.fields
	let text = header.children.find((item: any) => item.type === 'textParagraph' && item.key === 'textParagraph')
	// strip out style attributes from html tags
	let htmlText = text?.attributes?.text
	// replace span tags with p tags

	return htmlText?.replace(/style=\".*"/gm,'') || ''
}

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