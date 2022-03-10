import React from 'react';
import * as NextImage from 'next/image';

export default function Image(props) {
    return (
        <NextImage src={props.source} layout='fill' {...props} />
    )
}
