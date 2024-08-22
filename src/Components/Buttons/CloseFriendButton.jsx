import React from 'react'

const CloseFriendButton = ({handleNewFriend}) => {
  return (
    <div className='flex justify-end my-[1rem] mx-[1.5rem]'>
        <button className='py-[10px] px-[1rem] rounded-[10px] bg-[#d87c00] ' onClick={handleNewFriend}>
            close
        </button>
    </div>
  )
}

export default CloseFriendButton