import React, { useState } from 'react'

function Products({kuch, num, data}) {
  const [a,b] = useState(true);
  return (
    <div className=' w-full h-80 bg-zinc-600 text-white px-5 py-10'>
        <h1>{kuch} </h1>
        <h1> {num} </h1>
        <h1> {data.name} </h1>
        <h1> {data.age} </h1>
        <div className=' text-xl'>
          <h1 className= {` mt-4 ${a === true ? "text-green-500" : "text-yellow-400"}` } >
            {a === true ? "Hello" : "hey" }
          </h1>
          {/* <button onClick={()=>b(false)}  className=' rounded-lg text-lg px-1 py-1 bg-red-600 mt-5'>Change</button> */}
          <button onClick={()=>b(!a)}  className=' rounded-lg text-lg px-1 py-1 bg-red-600 mt-5'>Change</button>
        </div>
    </div>
  )
}

export default Products