import React from 'react';

interface Props {
	remaining: number
	type?: string 
}

const Status:React.FC<Props> = ({remaining, type}) => {

	const limit: number = (
		type === "multiple" ? (process.env.MULTI_EVENT_SELLOUT_WARNING_LIMIT || 100) : (process.env.SELLOUT_WARNING_LIMIT || 10)
		) as number
	
	if (remaining >= limit ) {
		return <></>
	}

	return (
		<span className="font-bold"> - {" "}
			{
				remaining === 0 ? <span className="text-red-700 uppercase">sold out</span> : remaining < limit ? ' Only ' + remaining + ' tickets!' : ""
			}
		</span>
	)
}

export default Status