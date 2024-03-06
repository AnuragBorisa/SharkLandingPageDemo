import React from 'react'
import "./LoadingSpiner.css"
const LoadingSpiner = () => {
  return (
    <div className="spinner">
    <span>Loading...</span>
    <div className="half-spinner"></div>
  </div>
  )
}

export default LoadingSpiner