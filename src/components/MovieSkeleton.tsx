import React from 'react'
import "../styles/Card.css";
import { Skeleton } from 'primereact/skeleton';

const MovieSkeleton = () => {
  return (
    <div className='skeleton_card relative'>
        <Skeleton className='w-full h-full relative bg-gray-300'/>
        <Skeleton className='w-3rem h-1rem absolute top-0 right-0 m-2 bg-bluegray-100'/>
        <Skeleton className='w-10rem h-1rem absolute top-0 left-0 m-2 bg-bluegray-100'/>
        <Skeleton className='w-full h-4rem absolute bottom-0 bg-bluegray-50 border-noround flex flex-column gap-2'>
            <Skeleton className='w-full h-1rem bg-bluegray-100 mt-2'/>
            <div className='flex flex-row gap-3'>
                <Skeleton className='w-4rem h-1rem bg-bluegray-100'/>
                <Skeleton className='w-full h-1rem bg-bluegray-100'/>
            </div>
        </Skeleton>
    </div>
  )
}

export default MovieSkeleton