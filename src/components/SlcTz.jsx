import React from 'react'

const SlcTz = ({estSaltLake, handleDateEnd}) => {
  return (
<>
{estSaltLake.map((item, idx) => (
        <li key={idx} className='timezone-row'>
            <span>Salt lake City:</span> <p>{item.slcDay} {item.slcMonth}{' '} {item.slcDate}
            {handleDateEnd(item.slcDate)} @{' '}
            {`${item.slcHours}` <= 9 ? `0${item.slcHours}` :`${item.slcHours}`} {' '}
            :{' '}
            {`${item.slcMinutes}` <= 9
              ? `0${item.slcMinutes}`
              : `${item.slcMinutes}` > 60
              ? `${item.slcMinutes}`.slice(-2)
              : `${item.slcMinutes}`.slice(-2)}
              </p>
        </li>
      ))}
</>
  )
}

export default SlcTz