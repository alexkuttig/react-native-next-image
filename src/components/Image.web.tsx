import React from 'react';
import Image from 'next/image';
const SharedImage = (props) => {
    return (
        <Image src={props.source} layout='fill' {...props} />
    )
}
export default SharedImage;
