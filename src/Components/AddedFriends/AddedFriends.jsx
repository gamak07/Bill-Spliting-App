import React from 'react'
import AddButton from '../Buttons/AddButton'
import CloseFriendButton from '../Buttons/CloseFriendButton'

const AddedFriends = ({url, setUrl, friendName, setFriendName, onNewFriendsSubmit, handleNewFriend}) => {
  return (
    <div className=''>
        <form action="" className='bg-[#fdf3e6] flex flex-col gap-[1rem] p-[1rem]' onSubmit={onNewFriendsSubmit}>
            <div className='flex items-center justify-between'>
                <label htmlFor="" className='font-bold'>Friend Name</label>
                <input 
                    type="text" 
                    className='bg-[#ffffff] text-center outline-[2px] outline-[#d79133] border-[#d79133] border h-[3rem] w-[12rem]'
                    value={friendName}
                    onChange={(e)=>setFriendName(e.target.value)}
                />
            </div>
            <div className='flex items-center justify-between'>
                <label htmlFor="" className='font-bold'>Image Url</label>
                <input 
                    type="url" 
                    className='bg-[#ffffff] outline-[2px] outline-[#d79133] border-[#d79133] border h-[3rem] w-[12rem]'
                    value={url}
                    onChange={(e)=>setUrl(e.target.value)}
                />
            </div>
            <AddButton />
        </form>
        <CloseFriendButton handleNewFriend={handleNewFriend} />
    </div>
  )
}

export default AddedFriends