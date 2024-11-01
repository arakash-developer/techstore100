import React from 'react';

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1600px] px-3 mx-auto ${className}`}>
        {children}
    </div>
  )
}
// px-3
export default Container;