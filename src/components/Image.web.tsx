import React from 'react';
import Image from 'next/image';

export default function Image(props) {
    return (
        <Image src={props.source} layout='fill' {...props} />
    )
}
