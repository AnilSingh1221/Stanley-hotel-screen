import { addDays, format } from "date-fns";

export const headers = new Headers();
headers.append("apiKey", process.env.API_KEY as string);

export const requestOptions = {
	method: 'GET',
	headers: headers,
	refetch: 10,
}

export const getInventory = async (formId: string) => {
	// get inventory for the next 5 days
	const fromDate = new Date()
	// five days from now
	const toDate = addDays(fromDate, 5)
	const params = `?from=${format(fromDate, 'yyyy-MM-dd')}&to=${format(toDate, 'yyyy-MM-dd')}&limit=10`
	
	const res = await fetch(`https://api.webconnex.com/v2/public/forms/${formId}/ticket-inventory${params}`, requestOptions)
	
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()
	
	return data.data || []
}

export const getForm = async (formId: string) => {
	const res = await fetch(`https://api.webconnex.com/v2/public/forms/${formId}`, requestOptions)
	
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()
	return data.data || {}
}

export const getForms = async () => {

	const now = new Date()

	const today = format(now, 'yyyy-MM-dd')

	const res = await fetch(`https://api.webconnex.com/v2/public/forms?product=ticketspice.com&pretty=true&sort=asc&status=open&datePublishedBefore=${today}`, requestOptions)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json()

	return data.data || []
}