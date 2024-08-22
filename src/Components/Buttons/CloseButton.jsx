import React from 'react'

const CloseButton = ({onShowBills}) => {
  return (
    <button className='py-[10px] px-[1rem] rounded-[10px] bg-[#d87c00]' onClick={onShowBills}>Close</button>
  )
}

export default CloseButton