import React from 'react'

export default function NoDataFound({text="No data found!"}) {
  return (
    <p className='text-white/40 text-center font-bold text-xl'>{text}</p>
  )
}
