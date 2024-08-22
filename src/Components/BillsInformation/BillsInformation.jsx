import React from 'react'
import SplitBills from '../Buttons/SplitBills'

const BillsInformation = ({billValue, setBillValue, expenseValue, setExpenseValue, footBill, setFootBill, onSubmit, selectedFriend, expenses, setExpenses}) => {

    const handleBillSplit = () =>{
        const totalBill = billValue
        const myExpense = expenseValue
        const friendExpense = totalBill - myExpense

        const newExpenses = {
            ...expenses, [selectedFriend.name]:(expenses[selectedFriend.name] || 0) + (footBill === '0' ? friendExpense : -friendExpense)
        }
        
        setExpenses(newExpenses)
        setBillValue('');
        setExpenseValue('');
        setFootBill('0');
        
        
    }

  return (
    <div className='w-full border p-[1rem] bg-[#fdf3e6]'>
        <h1>Split bill with {selectedFriend.name}</h1>
        <form 
            action="" 
            className='flex flex-col gap-[1rem] w-full'
            onSubmit={onSubmit}
        >
            <div className='w-full flex items-center justify-between'>
                <label htmlFor="" className='font-bold'>Bill Value</label>
                <input 
                    type="text" 
                    className='text-center bg-[#ffffff] outline-[2px] outline-[#d79133] border-[#d79133] border h-[3rem] w-[12rem]'
                    value={billValue} 
                    onChange={(e)=> setBillValue(Number(e.target.value))}
                />
            </div>
            <div className='w-full flex items-center justify-between'>
                <label htmlFor="" className='font-bold'>Your Expense</label>
                <input 
                    type="text" 
                    className='text-center bg-[#ffffff] outline-[2px] outline-[#d79133] border-[#d79133] border h-[3rem] w-[12rem]' 
                    value={expenseValue}
                    onChange={(e)=> setExpenseValue(Number(e.target.value))}
                />
            </div>
            <div className='w-full flex items-center justify-between'>
                <label htmlFor="" className='font-bold'>{selectedFriend.name} expense</label>
                <p className='flex justify-center items-center text-center border-[#d79133] border h-[3rem] w-[12rem]'>
                    {billValue - expenseValue}
                </p>
            </div>
            <div className='w-full flex items-center justify-between'>
                <label htmlFor="" className='font-bold'>Who is paying the bill</label>
                <select 
                    className='bg-[#ffffff] outline-[2px] outline-[#d79133] border-[#d79133] border h-[3rem] w-[12rem]'
                    value={footBill}
                    onChange={(e)=>setFootBill(Number(e.target.value))}
                >
                    <option value="0">You</option>
                    <option value="1">name</option>
                </select>
            </div>
            <SplitBills onSplitBill={handleBillSplit} />
        </form>
    </div>
  )
}

export default BillsInformation