import React, { ReactElement } from 'react'
import Status from './status'

interface Props {
	label: string | ReactElement
	remaining: number
	type: string
}

const ListItem:React.FC<Props> = ({label, remaining, type}) => {
	return (
		<li className="px-2 py-1.5">
			{label} <Status remaining={remaining} type={type} />
		</li>
	)
}

export default ListItem