import Image from 'next/image'
import React from 'react'

const SideBarNav = () => {
  const menuList = [
    {
      id:1,
      name:'Browse',
      path:'/browse'
    },
    {
      id:2,
      name:'News',
      path:'/news'
    },
  ]
  
  return (
    <div className="h-full  bg-white border-r flex flec-col overflow-y-auto shadow-md">
      <div className="p-5 border-b-6 z-50">
        <Image src="/next.svg" alt='logo' width={170} height={100} />
        </div>
    </div>
  )
}

export default SideBarNav