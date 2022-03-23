import React from 'react';
// *! Need to make this date the deployment from when the counter time  was started
 const londonTimeZone = new Date().toLocaleString('en-GB', {
    timeZone: 'Europe/London',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  // const countStart=  
// const countDownTime = +new Date({countStart}) - +new Date().toLocaleDateString('en-GB')
const London = () => {
  return <div>London: {londonTimeZone}</div>;
};

export default London;
