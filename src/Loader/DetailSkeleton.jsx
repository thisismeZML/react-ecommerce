import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const DetailSkeleton = () => {
  return (
    <div className="my-[50px] font-primaryFont">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center md:gap-5">
        <div className="flex items-center justify-center md:items-start md:justify-start">
            <Skeleton className="w-[300px] md:w-full md:h-[500px] h-[300px]"/>
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-12"/>
          <Skeleton className="w-[200px] h-7"/>
          <Skeleton className="w-full h-[200px]"/>
          <Skeleton className="w-4 h-4"/>
          <div className="flex items-center gap-3">
          <Skeleton className="w-full h-12"/>
          <Skeleton className="w-full h-12"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSkeleton