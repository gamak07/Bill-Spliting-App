import { useState } from 'react'
import './App.css'
import BillsInformation from './Components/BillsInformation/BillsInformation'
import Friends from './Components/Friends/Friends'
import AddedFriends from './Components/AddedFriends/AddedFriends'
import Data from './Data'

function App() {
  const [billValue, setBillValue] = useState('')
  const [expenseValue, setExpenseValue] = useState('')
  const [footBill, setFootBill] = useState('0')
  const [billsInformation, setBillsInformation] = useState(false)
  const [friendName, setFriendName] = useState('')
  const [url, setUrl] = useState('https://i.pravatar.cc/48?u=933372')
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [toggleNewFriend, setToggleNewFriend] = useState(false)
  const [newFriends, setNewFriends] = useState(Data)
  const [expenses, setExpenses] = useState(0)
  

  const handleBillSubmit = (e) =>{
    e.preventDefault()
  }

  const handleNewFriendsSubmit = (e) =>{
    e.preventDefault()
    const newAddedFriends = { name:friendName, url:url }
    setNewFriends([...newFriends, newAddedFriends])
    setFriendName('')
    setUrl('https://i.pravatar.cc/48?u=933372')
    setToggleNewFriend(false)
  }
  const closeNewFriend = () =>{
    setToggleNewFriend(false)
  }

  return (
    <div className='flex justify-center w-[100%] gap-[5rem] my-[5rem]'>
      <div className='w-[40%]'>
        <Friends 
          billsInformation={billsInformation} 
          setBillsInformation={setBillsInformation} 
          toggleNewFriend={toggleNewFriend}
          setToggleNewFriend={setToggleNewFriend}
          setSelectedFriend={setSelectedFriend}
          newFriends={newFriends}
          expenses={expenses}
        />

        {toggleNewFriend && 
        <AddedFriends 
          friendName={friendName}
          setFriendName={setFriendName}
          url={url}
          setUrl={setUrl}
          onNewFriendsSubmit={handleNewFriendsSubmit}
          handleNewFriend={closeNewFriend}

        />}
      </div>
      <div className='w-[40%]'>
        {billsInformation && 
          <BillsInformation 
            billValue={billValue} 
            setBillValue={setBillValue}
            expenseValue={expenseValue}
            setExpenseValue={setExpenseValue} 
            footBill={footBill}
            setFootBill={setFootBill}
            onSubmit={handleBillSubmit}
            selectedFriend={selectedFriend}
            expenses={expenses}
            setExpenses={setExpenses}
        />}
      </div>
      
    </div>
  )
}

export default App
