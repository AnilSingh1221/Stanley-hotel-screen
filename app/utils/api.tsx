import { addDays, format } from "date-fns";

export const headers = new Headers();
headers.append("apiKey", process.env.API_KEY as string);

export const requestOptions = {
	method: 'GET',
	headers: headers,
	next: {
		revalidate: 60,
	}
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

export const getForms = async (limit: number) => {

	const now = addDays(new Date(), 3)

	const today = format(now, 'yyyy-MM-dd')
	const url = `https://api.webconnex.com/v2/public/forms?product=ticketspice.com&pretty=true&sort=asc&status=open&datePublishedBefore=${today}&limit=${limit}`
	
	const res = await fetch(url, requestOptions)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json()

	return orderForms(data.data) || []
}


// This specifies the order of the forms
// any forms not in this array will be sorted by published date
// and added to the end of the array
const formOrder = [
	596547, // historic day tour
	596631, // night tour
	596627, // shining tour
	596630, // kings cottage tour
	603469, // the vault tour
	608698, // frank turner
]

// orderForms based on form order, move any matches to the end of the array
export const orderForms = (forms: any) => {
	const orderedForms = forms.sort((a: any, b: any) => {
		const aIndex = formOrder.indexOf(a.id)
		const bIndex = formOrder.indexOf(b.id)
		
		if (aIndex === -1 && bIndex === -1) {
			return 0
		}
		
		if (aIndex === -1) {
			return 1
		}
		
		if (bIndex === -1) {
			return -1
		}
		
		return aIndex - bIndex
	})
	
	return orderedForms
}
