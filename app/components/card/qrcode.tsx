import React from 'react';
import * as QRcode from 'qrcode';
import Image from 'next/image';

interface Props {
	url: string
	title: string
}

const QRCode:React.FC<Props> = async ({url, title}) => {
	const imageUrl = await QRcode.toDataURL(url);
	return (
		<div className="float-right">
		<Image 
			src={imageUrl as string}
			width={75}
			height={75}
			alt={title}
		/>
		</div>
	)
	}

export default QRCode
