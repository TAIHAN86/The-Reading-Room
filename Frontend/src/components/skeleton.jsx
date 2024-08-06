import React from 'react'
import '../../src/index.css'

const Skeleton = () => {
  return (
    <div className="flex w-95 flex-col gap-6">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
  )
}

export default Skeleton;