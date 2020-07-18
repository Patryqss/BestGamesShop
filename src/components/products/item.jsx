import React from 'react'

export default function item(props) {
    const data = props.data;
    return (
        <div>
            <p className='title'>{data.title}</p>
            <img alt={data.title} src={data.cover} />
            {!data.availability && <p className='italic red'>Not available</p>}
            {data.availability && <p className='italic'>Get it for {data.price} {data.currency}</p>}
        </div>
    )
}
