import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContent';

export const Page1content = () => {
  return (
    <div className='py-10 flex items-center justify-between gap-10 h-[90vh] px-18'>
    <LeftContent />
    <RightContent />
    </div>
  )
}
export default Page1content