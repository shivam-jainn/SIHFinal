import React from 'react'
import ViewsTabs from '@/components/ViewsTabs/ViewsTabs'
import ViewsCard from '@/components/ViewsCard/ViewsCard'

export default function layout({children,data}) {
  return (
    <>    
    <ViewsTabs views={data.views} />


    {children}
    
    <ViewsCard />
    </>
  )
}
