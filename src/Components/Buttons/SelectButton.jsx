import React from 'react'

const SelectButton = ({onShowBills}) => {
  return (
    <button className='py-[10px] px-[1rem] rounded-[10px] bg-[#d87c00]' onClick={onShowBills}>Select</button>
  )
}

export default SelectButton