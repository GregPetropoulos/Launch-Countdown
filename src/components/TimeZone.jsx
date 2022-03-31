import { useState, useEffect } from 'react';

const TimeZone = ({ isActive, timer, isPaused,secondsToTime}) => {
  const [tzUpdate, setTzUpdate] = useState(false);
  const [estLondon, setEstLondon] = useState([
    {
      lonDay: '',
      lonMonth: '',
      lonDate: 0,
      lonHours: 0,
      lonMinutes: 0,
      lonSeconds: 0,
      lonYear: 0
    }
  ]);

  //   DESTRUCTURE
  const [{ lonDay, lonMonth, lonDate, lonHours, lonMinutes, lonSeconds }] =
    estLondon;

  const [estNYC, setEstNYC] = useState([
    {
      nycDay: '',
      nycMonth: '',
      nycDate: 0,
      nycHours: 0,
      nycMinutes: 0,
      nycSeconds: 0,
      nycYear: 0
    }
  ]);

  //   DESTRUCTURE
  const [{ nycDay, nycMonth, nycDate, nycHours, nycMinutes, nycSeconds }] =
    estNYC;

  const [estSaltLake, setEstSaltLake] = useState([
    {
      slcDay: '',
      slcMonth: '',
      slcDate: 0,
      slcHours: 0,
      slcMinutes: 0,
      slcSeconds: 0,
      slcYear: 0
    }
  ]);

  //   DESTRUCTURE
  const [{ slcDay, slcMonth, slcDate, slcHours, slcMinutes, slcSeconds }] =
    estSaltLake;

  // * INITIAL TIME OF TIMEZONES ON FIRST PAGE RENDER
  //   useEffect(() => {
  //     if (timer === 0) {
  //       lonTimeZoneToState();
  //       nycTimeZoneToState();
  //       slcTimeZoneToState();
  //     }
  //   }, []);


  useEffect(() => {
    //  *CALCULATE THE ESTIMATED DEPLOY TIME
    console.log('TIMER tz useeFFECT', timer);

    lonTimeZoneToState();
    nycTimeZoneToState();
    slcTimeZoneToState();
   
    if (isActive) {

      const nHours = Math.floor(timer / 3600);
      const nMin = Math.floor(timer %3600/60);
      const nSec = Math.floor(timer % 60)
      const nDate = Math.floor(nHours / 24);
      const nDay = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ];
      const updateNyc = () => {
        // *UPDATE NYC DATA VIA TIMER
        setEstNYC((prevState) => {
          return prevState.map((item) => ({
            ...item,
            nycSeconds: nycSeconds + nSec,
            nycMinutes: nycMinutes + nMin,
            nycHours: nycHours + nHours,
            nycDate: nHours > 24 ? nycDate + nDate : nycDate
            //   nycDay: nHours>24 && nDay===nycDay
          }));
        });
      };
      updateNyc();

      const updateSlc = () => {
        // *UPDATE SLC DATA VIA TIMER
        setEstSaltLake((prevState) => {
          return prevState.map((item) => ({
            ...item,
            slcSeconds: slcSeconds + nSec,
            slcMinutes: slcMinutes + nMin,
            slcHours: slcHours + nHours,
            slcDate: nHours > 24 ? slcDate + nDate : slcDate
            //   slcDay: nHours>24 && nDay===slcDay
          }));
        });
      };
      updateSlc();

      const updateLon = () => {
        // *UPDATE LONDON DATA VIA TIMER
        setEstLondon((prevState) => {
          return prevState.map((item) => ({
            ...item,
            lonSeconds: lonSeconds + nSec,
            lonMinutes: lonMinutes + nMin,
            lonHours: lonHours + nHours,
            lonDate: nHours > 24 ? lonDate + nDate : lonDate
            //   lonDay: nHours>24 && nDay===lonDay
          }));
        });
      };
      updateLon();
    }
   
  }, [isActive]);

  //   console.log('estNYC OUTSIDE THE USEEFFECT', estNYC);
  console.log('OUTSIDE UE--isActive', isActive);
  console.log('OUTSIDE UE--isPaused', isPaused);

  // * GET THE LONDON TIME
  const lonTimeZoneToState = () => {
    const londonTime = new Date().toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      dateStyle: 'full',
      timeStyle: 'full'
    });
    // *BREAK TIMEZONE INTO AN ARRAY
    const londonArray = londonTime.split(' ');
    // console.log('londonArray', londonArray);
    // * BREAK DOWN TIME INTO HH:MM:SS
    const hour = parseInt(londonArray[5].split(':')[0]);
    const min = parseInt(londonArray[5].split(':')[1]);
    const sec = parseInt(londonArray[5].split(':')[2]);
    //* SET THE STATE
    //   may need to dry this up later
    setEstLondon([
      {
        lonDay: londonArray[0],
        lonDate: parseInt(londonArray[1]),
        lonMonth: londonArray[2],
        lonYear: parseInt(londonArray[3]),
        lonHours: hour,
        lonMinutes: min,
        lonSeconds: sec
      }
    ]);
  };

  // *GET THE NYC TIME
  const nycTimeZoneToState = () => {
    const nycTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'full'
    });

    // *BREAK TIMEZONE INTO AN ARRAY
    const nycArray = nycTime.split(' ');
    console.log('nycArray', nycArray);
    // * BREAK DOWN TIME INTO HH:MM:SS
    const hour = parseInt(nycArray[5].split(':')[0]);
    const min = parseInt(nycArray[5].split(':')[1]);
    const sec = parseInt(nycArray[5].split(':')[2]);

    //* SET THE STATE
    //   may need to dry this up later
    setEstNYC([
      {
        nycDay: nycArray[0],
        nycMonth: nycArray[1],
        nycDate: parseInt(nycArray[2]),
        nycHours: hour,
        nycMinutes: min,
        nycSeconds: sec,
        nycYear: parseInt(nycArray[3])
      }
    ]);
  };
  console.log('estNYC--CHECK', estNYC);
  // *SLC TIME
  const slcTimeZoneToState = () => {
    const slcTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      dateStyle: 'full',
      timeStyle: 'full'
    });

    // *BREAK TIMEZONE INTO AN ARRAY
    const slcArray = slcTime.split(' ');
    // console.log('slcArray', slcArray);
    // * BREAK DOWN TIME INTO HH:MM:SS
    const hour = parseInt(slcArray[5].split(':')[0]);
    const min = parseInt(slcArray[5].split(':')[1]);
    const sec = parseInt(slcArray[5].split(':')[2]);

    //* SET THE STATE
    //   may need to dry this up later
    setEstSaltLake([
      {
        slcDay: slcArray[0],
        slcMonth: slcArray[1],
        slcDate: parseInt(slcArray[2]),
        slcHours: hour,
        slcMinutes: min,
        slcSeconds: sec,
        slcYear: parseInt(slcArray[3])
      }
    ]);
  };

  //   *HANDLING DATE ENDINGS
  const handleDateEnd = (dateEnd) => {
    if (dateEnd === 1 || dateEnd === 21 || dateEnd === 31) {
      return 'st';
    }
    if (dateEnd === 2 || dateEnd === 22) {
      return 'nd';
    }
    if (dateEnd === 3 || dateEnd === 23) {
      return 'rd';
    }
    if ((dateEnd > 3 && dateEnd < 21) || (dateEnd > 23 && dateEnd <= 30)) {
      return 'th';
    }
  };

  //*TODO HANDLE THE OVERAGE MINUTES AND ALLOCAT AS HOURS TO THE STATE
  //*HANDLING THE MINUTES FOR THE UI AFTER THE STATE UPDATES VIA TIMER
  const handleMinutes = (minDigits) => {
    if (minDigits >= 0 && minDigits <= 9) {
      return '0' + minDigits;
    } else if (minDigits > 9) {
      return minDigits;
    }
    if (minDigits > 60) {
      return minDigits - 60;
    }
  };

  return (
    <>
      <div className='timezone-wrapper'>
        <small>Estimated deployment time</small>
        <div className='timezone-row'>
          London : {lonDay} {lonMonth} {lonDate}
          {handleDateEnd(lonDate)} @ {lonHours}: {handleMinutes(lonMinutes)}
        </div>

        {/* <div className='timezone-row'>
          New York City : {nycDay} {nycMonth} {nycDate}
          {handleDateEnd(nycDate)} @ {nycHours}: {`${nycMinutes}`<9? `0${nycMinutes}`:`${nycMinutes}`>60?`${nycMinutes-nycMinutes}`:`${nycMinutes}`}
        </div> */}

        {estNYC.map((item, idx) => (
          <div key={idx} className='timezone-row'>
            New York City : {item.nycDay} {item.nycMonth} {item.nycDate}
            {handleDateEnd(item.nycDate)} @{' '}
            {`${item.nycHours}` <= 9 ? `0${item.nycHours}` : `${item.nycHours}`}{' '}
            :{' '}
            {`${item.nycMinutes}` <= 9
              ? `0${item.nycMinutes}`
              : `${item.nycMinutes}` > 60
              ? `${item.nycMinutes}`.slice(-2)
              : `${item.nycMinutes}`.slice(-2)}
            {/* {handleMinutes(nycMinutes)} */}
          </div>
        ))}
          {estNYC.map((item, idx) => (
          <div key={idx} className='timezone-row'>
            New York City : {item.nycDay} {item.nycMonth} {item.nycDate}
            {handleDateEnd(item.nycDate)} @
            {item.nycHours} : { item.nycMinutes}
            {/* {handleMinutes(nycMinutes)} */}
          </div>
        ))}

        <div className='timezone-row'>
          Salt Lake City : {slcDay} {slcMonth} {slcDate}
          {handleDateEnd(slcDate)} @ {slcHours}: {handleMinutes(slcMinutes)}
        </div>
      </div>
    </>
  );
};

export default TimeZone;
