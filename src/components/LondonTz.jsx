import React from 'react';

const LondonTz = ({ estLondon, handleDateEnd }) => {
  return (
    <>
    {estLondon.map((item, idx) => (
        <li key={idx} className='timezone-row'>
            <span>London:</span> <p>{item.lonDay} {item.lonMonth}{' '} {item.lonDate}
            {handleDateEnd(item.lonDate)} @{' '}
            {`${item.lonHours}` <= 9 ? `0${item.lonHours}` :`${item.lonHours}`} {' '}
            :{' '}
            {`${item.lonMinutes}` <= 9
              ? `0${item.lonMinutes}`
              : `${item.lonMinutes}` > 60
              ? `${item.lonMinutes}`.slice(-2)
              : `${item.lonMinutes}`.slice(-2)}
              </p>
        </li>
      ))}
    </>
  );
};

export default LondonTz;
