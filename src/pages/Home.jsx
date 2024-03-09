import React from 'react'

function Home() {
  return (
    <div >
      <div className='relative'>
        <div className='w-5/6 h-[400px] mt-2 mx-auto bg-cover bg-center bg-no-repeat rounded-xl flex flex-col justify-center items-center relative' style={{backgroundImage: `url(./home-head-banner.jpg)`}}>
            <h1 className='text-black text-5xl font-bold'>Discover Sport Lovers Near You</h1>
            <p className='text-3xl pt-4 text-black font-black'>Our Advanced Features</p>
        </div>

        <form className='flex justify-evenly gap-4 w-1/2 bg-slate-200 px-4 py-2 rounded-full absolute -bottom-8 left-96'>
        <div className='border-r border-black flex flex-col'>
          <label id='Location'>Location</label>
          <input htmlFor="Location" className='bg-slate-200 focus:outline-none' type="text" placeholder='Search nearby'/>
        </div>
        <div className=' border-r border-black flex flex-col'>
            <label id='Search'>Search By</label>
          <input htmlFor="Search" className='bg-slate-200 focus:outline-none' type="text" placeholder='Sports'/>
        </div> 
        <div className='w-[50px] h-[50px] flex items-center border-2 border-black justify-center'>
          <button onClick={(e) => e.preventDefault()} type='submit' className='text-2xl font-black'>&#x2192;</button>
        </div>
      </form>
      </div>
        
      <div className='flex'> 
        <div className='w-1/4'>
          <img src="./running.jpg" alt="" />
        </div>
        
        <div className='w-1/4'>
          <img src="./yoga.jpg" alt="" />
          <img src="./football.jpg" alt="" />
        </div>
        <div className='w-1/4'>
          <img src="./basketball.jpg" alt="" />
        </div>
        <div className='w-1/4'>
          <img src="./cycleing.jpg" alt="" />
          <img src="./swiming.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home