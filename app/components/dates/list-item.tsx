import React, { ReactElement } from 'react'
import Status from './status'

interface Props {
	label: string | ReactElement
	remaining: number
	type: string
}

const ListItem:React.FC<Props> = ({label, remaining, type}) => {

	const formatLabel = (label: string, remaining: number) => {
		if (remaining === 0) {
			return <span className="line-through decoration-gray-500">{label}</span>
		}
		return label
	}

	return (
		<li className="px-2 py-1.5">
			{/* remaining: {remaining} */}
			{formatLabel(label as string, remaining)} <Status remaining={remaining} type={type} />
		</li>
	)
}

export default ListItem