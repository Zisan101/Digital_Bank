import React from 'react'
import RightCard from './RightCard'

export const RightContent = (props) => {
  return (
    <div className='h-full rounded-4xl flex flex-nowrap gap-6 p-6 w-2/3 overflow-x-auto'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id = {idx} img={elem.image} tag={elem.tag} intro={elem.intro} />
        })}
    </div>
  )
}
export default RightContent
