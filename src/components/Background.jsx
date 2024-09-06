import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen'>
        <div className='absolute bottom-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-9xl	leading-none tracking-tighter font-semibold text-white'>Docs.</h1>
    </div>
    </>
  )
}

export default Background