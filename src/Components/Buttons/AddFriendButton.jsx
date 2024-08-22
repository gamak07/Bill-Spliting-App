import React from 'react'

const AddFriendButton = ({handleNewFriend}) => {
  return (
    <div className='flex items-center justify-end mx-[1.5rem]'>
        <button className='py-[10px] px-[1rem] rounded-[10px] bg-[#d87c00]' onClick={handleNewFriend}>
            Add Friend
        </button>
    </div>
  )
}

export default AddFriendButton