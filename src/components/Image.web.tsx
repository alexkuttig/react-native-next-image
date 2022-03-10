import React from 'react';
import Image from 'next/image';

export function SharedImage(props) {
    return (
        <Image src={props.source} layout='fill' {...props} />
    )
}
