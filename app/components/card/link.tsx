import React from 'react';

interface Props {
	link: string
	label: string
}

const Link:React.FC<Props> = ({link, label}) => {
	return (
		<div className="pt-4">
			<a href={link} className="text-blue-700 hover:text-blue-500" target='_blank'>{label}</a>
		</div>
	)
}

export default Link
