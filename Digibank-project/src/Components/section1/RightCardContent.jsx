import React from 'react'

const RightCardContent = () => {
  return (
     <div className="h-full w-90 bg-red-600 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">1</h2>
            <div>
            <p className="text-lg leading-normal text-white mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quis quas aliquid? Laudantium, hic explicabo.</p>
            <div className="flex justify-between">
                <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-lg">Satisfied</button>
                <button><i className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full text-lg ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RightCardContent