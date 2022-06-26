import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='text-slate-900 flex justify-center items-center p-4 pt-28 pb-28'>
        <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-slate-800'>Contact</p>
                <p className='text-slate-800 pt-4 text-xl'>Feel free to tell us about our website's issues and bugs...</p>
            </div>
            <input className='border-2 p-2 rounded-xl border-slate-500 text-slate-900' type="text" placeholder='Name' name='name' />
            <input className='border-2 my-4 p-2 rounded-xl border-slate-500 text-slate-900' type="email" placeholder='Email' name='email' />
            <textarea className='border-2 p-2 rounded-xl border-slate-500 text-slate-900' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-xl px-14 bg-zinc-100 text-slate-900 border-2 border-slate-500 hover:bg-orange-100 hover:border-orange-300 py-3 mt-8 mx-auto flex items-center duration-300 rounded-xl'>Submit</button>
        </form>
    </div>
  )
}

export default Contact