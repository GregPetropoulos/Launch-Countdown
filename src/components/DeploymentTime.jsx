import { useState } from 'react';

const DeploymentTime = () => {
  // set up state to handle the date  and time values
  const [depTime, setDepTime] = useState([
    {
      day: '',
      month: '',
      date: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      year: 0
    }
  ]);

  const [{ date }] = depTime;
// * FIRST APPROACH GET THE TIME FOR A TZ IN MILLISECON



//  Get the date of a time zone
function changeTimeZone(date, timeZone) {
    // check if string
    if (typeof date === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone,
        }),
      );
    }

    return new Date(
      date.toLocaleString('en-US', {
        timeZone,
      }),
    );
  }
  
  const laDate = changeTimeZone(new Date(), 'America/Los_Angeles');
  console.log("LA",laDate); // 👉️ "Sun Jan 16 2022 01:22:07"
  
  const berlinDate = changeTimeZone(new Date(), 'Europe/Berlin');
  console.log("BERLIN",berlinDate); // 👉️ "Sun Jan 16 2022 10:22:07"
 
  

//   ADD 240 MINUTES TO LA
  var oldDateObj = laDate;
  var newDateObj = new Date();
  newDateObj.setTime(oldDateObj.getTime() + (240 * 60 * 1000));
  console.log("newdateobject of la",newDateObj);


  // Function for getting timezone value
const timezoneValue =(milliseconds)=> {

//    Set the state by converting the milliseconds to proper timezone
}
  return (
    <div>
      <p>Estimated Deployment time</p>
      <p>NYC : {date} </p>
    </div>
  );
};

export default DeploymentTime;
