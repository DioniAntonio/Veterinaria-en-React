import React from 'react'

const error = ({mensaje}) => {
  return (
       <div className="bg-red-800 text-white p-3 uppercase font-bold mb-3 rounded-md text-center">
                        
                        <p>{mensaje}</p>
                            
                    </div>
  )
}

export default error
