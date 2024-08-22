import React, { useState } from 'react'
import SelectButton from '../Buttons/SelectButton'
import CloseButton from '../Buttons/CloseButton'

const FriendList = ({name, image, expense, setBillsInformation, setSelectedFriend, id, isOpen, setIsOpen, expenses}) => {
    
const onOpen = id === isOpen

    const handleSelectButton = () =>{
        setIsOpen(onOpen ? null : id)
        setBillsInformation(!onOpen)
        setSelectedFriend({name, expense})
        
    }
    

  return (

    <div className={`flex items-center justify-between py-[1rem] px-[1.5rem] w-full hover:bg-[#fdf3e6] ${onOpen ? 'bg-[#fdf3e6]' : ''}`}>
        <div className='flex items-center gap-[2rem]'>
            <div className='w-[3rem] h-[3rem]'>
                <img src={image ||'https://i.pravatar.cc/48?u=933372'} alt="" className='w-[100%] h-[100%] rounded-full' />
            </div>
            <div>
                <p className='font-bold '>{name}</p>
                <p className=''>
                {expenses[name] > 0 ? (
                    <span className='text-[#019f0e]'>{name} owes you #{expenses[name]}</span>
                        ) : expenses[name] < 0 ? (
                    <span className='text-[#f41901]'>You owe {name} #{Math.abs(expenses[name])}</span>
                        ) : (
                    <span className='text-[#b2afac]'>You and {name} are even</span>
  )}
                </p>
            </div>
        </div>
        <div>
            {
                onOpen ?
                <CloseButton onShowBills={handleSelectButton} />:
                <SelectButton onShowBills={handleSelectButton} />
            }
        </div>
    </div>
  )
}

export default FriendList