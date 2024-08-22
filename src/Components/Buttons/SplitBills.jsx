import React from 'react'

const SplitBills = ({onSplitBill}) => {
  
  return (
    <button className='py-[10px] px-[1rem] rounded-[10px] bg-[#d87c00]' onClick={onSplitBill}>
      Split Bill
    </button>
  )
}

export default SplitBills