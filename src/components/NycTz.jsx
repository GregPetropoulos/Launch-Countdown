import React from 'react';

const NycTz = ({ estNYC, handleDateEnd }) => {

  return (
    <>
      {estNYC.map((item, idx) => (
        <li key={idx} className='timezone-row'>
            <span>New York City:</span> <p>{item.nycDay} {item.nycMonth}{' '} {item.nycDate}
            {handleDateEnd(item.nycDate)} @{' '}
            {`${item.nycHours}` <= 9 ? `0${item.nycHours}` :`${item.nycHours}`} {' '}
            :{' '}
            {`${item.nycMinutes}` <= 9
              ? `0${item.nycMinutes}`
              : `${item.nycMinutes}` > 60
              ? `${item.nycMinutes}`.slice(-2)
              : `${item.nycMinutes}`.slice(-2)}
              </p>
        </li>
      ))}
    </>
  );
};

export default NycTz;

// {estNYC.map((item, idx) => (
//   <li key={idx} className='timezone-row'>
//       <span>New York City:</span> <p>{item.nycDay} {item.nycMonth}{' '}
//       {`${item.nycHours}`>24?`${item.nycDate+1}`:`${item.nycDate}`}
//       {handleDateEnd(item.nycDate)} @{' '}
//       {`${item.nycHours}` <= 9 ? `0${item.nycHours}` : `${item.nycHours}`>23?`${item.nycHours-24}`: `${item.nycHours}`}{' '}
//       :{' '}
//       {`${item.nycMinutes}` <= 9
//         ? `0${item.nycMinutes}`
//         : `${item.nycMinutes}` > 60
//         ? `${item.nycMinutes}`.slice(-2)
//         : `${item.nycMinutes}`.slice(-2)}
//         </p>
//   </li>
// ))}