import { showDescription } from '@/app/utils/fields';
import React from 'react';

interface Props {
	type: string
	text: string
}

const Description:React.FC<Props> = ({text, type}) => {
	return  showDescription(type) ? <div className="p-3" dangerouslySetInnerHTML={{ __html: text }} /> : null
}

export default Description
