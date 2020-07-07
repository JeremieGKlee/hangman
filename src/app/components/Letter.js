import React from 'react'

export function Letter(props)
{
    const { letter, reveal } = props
    return(
    <span className='letter'>{ reveal ? letter : '_' }</span>
    )
}