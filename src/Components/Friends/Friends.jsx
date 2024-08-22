import {useState} from 'react'
import Data from '../../Data'
import AddFriendButton from '../Buttons/AddFriendButton';
import FriendList from '../FriendsList/FriendList';

const Friends = ({onShowBills, billsInformation, setBillsInformation, toggleNewFriend, setToggleNewFriend, setSelectedFriend, newFriends, expenses}) => {

  
  const [isOpen, setIsOpen] = useState(null)

 
  const handleNewFriend = () =>{
    setToggleNewFriend(!toggleNewFriend)
  } 

  
  return (
    <div className='w-full flex flex-col gap-[2rem]'>
      <div>
        {newFriends.map((data, i) => (
          <FriendList 
            key={i} 
            id={i}
            name={data.name} 
            expense={data.expenses} 
            image={data.image} 
            onShowBills={onShowBills} 
            billsInformation={billsInformation}
            setBillsInformation={setBillsInformation}
            setSelectedFriend={setSelectedFriend}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            expenses={expenses}
          />
        ))}
      </div>
      <div>
        {toggleNewFriend  ?  null: <AddFriendButton handleNewFriend={handleNewFriend} />} 
      </div>
    </div>
  )
}

export default Friends