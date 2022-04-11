import { useEffect, useState } from 'react';

const DeploymentTime = ({ isActive, timer }) => {
  // set up state to handle the date  and time values
  // const [depTime, setDepTime] = useState([
  //   {
  //     day: '',
  //     month: '',
  //     date: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //     milliseconds: 0,
  //     year: 0
  //   }
  // ]);
  // const [{ date }] = depTime;
  // * INITIAL STATE
  const [dateTime, setDateTime] = useState([
    {
      london: '',
      nyc: '',
      denver: ''
    }
  ]);
  // const [isCounterActive, setIsCounterActive] = useState(true);

  useEffect(() => {
    // On initial render show current date
    // setDateTime((prevState)=> [...prevState,{london:londonDate},{nyc:nycDate},{denver:denverDate}])
    // * SET DATE TO CURRENT DATE ON FIRST RENDER
    setDateTime([
      {
        london: formatTimezones(londonDate),
        nyc: formatTimezones(nycDate),
        denver: formatTimezones(denverDate)
      }
    ]);
    //* SHOW NEW DEPLOY DATE IF COUNTER IS ACTIVE
    if (isActive) {
      estDeployedTime();
    }
  }, [timer]);

  // *GET THE TIMEZONES OF LOCATION BY PASSING A STRING DATE AND TIMEZONE
  //* -------------------------------------------------------------------------------------
  function changeTimeZone(date, timeZone) {
    // check if string
    if (typeof date === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone
        })
      );
    }

    return new Date(
      date.toLocaleString('en-US', {
        timeZone
      })
    );
  }
  //* -------------------------------------------------------------------------------------

  // *INITIAL TIMEZONES
  //* -------------------------------------------------------------------------------------
  // londonDate is based off converted local EST
  const londonDate = changeTimeZone(new Date(), 'Europe/London');
  const nycDate = changeTimeZone(new Date(), 'America/New_York');
  const denverDate = changeTimeZone(new Date(), 'America/Denver');
  //* -------------------------------------------------------------------------------------

  // *FORMAT TIMEZONE
  //* -------------------------------------------------------------------------------------
  const formatTimezones = (date) => {
    const stringDate = date
      .toString()
      .replace('2022', '@')
      .split(' ')
      .slice(0, 5)
      .join(' ');
    const newFormatDate = stringDate;
    return newFormatDate;
  };
  //* -------------------------------------------------------------------------------------

console.log(timer);
  
  // * PASS IN THE DATE AND TIME MINUTES TO ADD TO A TIMEZONE
  //* -------------------------------------------------------------------------------------
  const addCounterMinutesToTimezone = (date, timer) => {
    let oldDateObj = date;
    let newDateObj = new Date();
    return newDateObj.setTime(oldDateObj.getTime() + timer * 1000);
  };
  //* -------------------------------------------------------------------------------------

  // * ADD MINUTES, FORMAT TIMEZONE AND SET DATE NEW DEPLOY DATE
  //* -------------------------------------------------------------------------------------
  const estDeployedTime = () => {
    const nycDeploy = new Date(addCounterMinutesToTimezone(nycDate, timer));
    const londonDeploy = new Date(addCounterMinutesToTimezone(londonDate, timer));
    const denverDeploy = new Date(addCounterMinutesToTimezone(denverDate, timer));

    setDateTime([
      {
        london: formatTimezones(londonDeploy),
        nyc: formatTimezones(nycDeploy),
        denver: formatTimezones(denverDeploy)
      }
    ]);
  };
  //* -------------------------------------------------------------------------------------

  // *DESTRUCTURE
  const [{ london, nyc, denver }] = dateTime;
  return (
    <div className='timezones'>
      <small>Estimated Deployment time</small>
      <ul className='list-of-timezones'>
        <li className='london'>London: <p>{london}</p></li>
        <li className='newyorkcity'>New York City: <p>{nyc}</p></li>
        <li className='denver'>Denver: <p>{denver}</p></li>
      </ul>
    </div>
  );
};

export default DeploymentTime;
