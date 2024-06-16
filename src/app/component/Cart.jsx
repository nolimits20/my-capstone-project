import React from 'react'

const Cart = () => {
  return (
    <div>
    <div className=' w-[300px] sm:w-[500px] min-h-[100vh] bg-white flex flex-col items-center relative overflow-auto mt-6'>
        <h1 className='text-black ml-2 absolute top-0 left-2'>BAG</h1>
        <div className='flex-grow flex items-center justify-center'>
            <p className='text-center'>YOUR BAG IS EMPTY</p>
        </div>
    </div>



    </div>
  )
}

export default Cart