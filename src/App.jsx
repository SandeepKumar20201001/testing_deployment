import React, { useState } from 'react'
import Products from './Products'

function App() {
  var [a,b] = useState(69);
  // a point karega usestate me jo likha ho jaise ki 69 , b use hoga update ke liye
  return (
    <>
    <div className='w-full h-screen bg-zinc-700 px-8 py-8'>
      <div className=' w-72 h-32 bg-red-700 rounded-lg text-white px-4 py-2'>
        {/* <h1 className=' text-sm'>a</h1> isse "a" dikhega */}
        {/* <h1 className=' text-sm'> {a}  </h1> isse useState me diya number "69" dikhega   */}
        <h1 className=' text-lg'> {a}  </h1>
        <div className='flex space-x-4 mt-4'>
        <button onClick={()=>b(a-1)} className=' text-sm bg-green-500 rounded-lg px-1 py-1'>Decrease</button>
        <button onClick={()=>b(a+1)} className=' text-sm bg-green-500 rounded-lg px-1 py-1'>Increase</button>
        </div>
      </div>
      <Products  kuch = {a} num= {10} data = { {age:25, name: "Sandeep"} } />
    </div>
    
    </>
  )
}

export default App