import { useState, useEffect } from 'react';
import NycTz from './NycTz';
import LondonTz from './LondonTz';
import SlcTz from './SlcTz';

const TimeZone = ({ isActive, timer }) => {
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
  const [{ lonDay, lonDate, lonHours, lonMinutes, lonSeconds }] = estLondon;

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
  const [{ nycDay, nycDate, nycHours, nycMinutes, nycSeconds }] = estNYC;

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
  const [{ slcDay, slcDate, slcHours, slcMinutes, slcSeconds }] = estSaltLake;

  useEffect(() => {
    //  *CALCULATE THE ESTIMATED DEPLOY TIME

    lonTimeZoneToState();
    nycTimeZoneToState();
    slcTimeZoneToState();

    if (isActive) {
      const nHours = Math.floor(timer / 3600);
      const nMin = Math.floor((timer % 3600) / 60);
      const nSec = Math.floor(timer % 60);
      const nDate = Math.floor(nHours / 24);
      console.log(~~(240 / 60) % 60);
      // Comma must be in the array as a string
      const nDay = [
        'Monday,',
        'Tuesday,',
        'Wednesday,',
        'Thursday,',
        'Friday,',
        'Saturday,',
        'Sunday,'
      ];
      const day1bump = nDay.map((itemDate, idx, arr) =>
        itemDate === nycDay ? arr[idx + 1] : null
      );

      const day2bump = nDay.map((itemDate, idx, arr) =>
        itemDate === nycDay ? arr[idx + 2] : null
      );

      // *UPDATE NYC DATA VIA TIMER, LATTER SYSTEM FROM SECONDS TO DATE
      const updateNyc = () => {
        setEstNYC((prevState) => {
          return prevState.map((item) => ({
            ...item,
            nycSeconds:
              nycSeconds + nSec > 59 && ~~((nycSeconds + nSec) / 60) % 60
                ? nycMinutes + (~~((nycSeconds + nSec) / 60) % 60)
                : nycSeconds + nSec,
            nycMinutes:
              nycMinutes + nMin > 59 && ~~((nycMinutes + nMin) / 60) % 60
                ? nycHours + (~~((nycMinutes + nMin) / 60) % 60)
                : nycMinutes + nMin,
            nycHours:
              nycHours + nHours > 23 - nycHours &&
              ~~(nycHours + nHours / 24) % 24
                ? nycHours + (~~(nycHours + nHours / 24) % 24)
                : nycHours + nHours,
            nycDate:
              nycHours + nHours > 23 && nycHours + nHours < 47
                ? nycDate + 1
                : nycHours + nHours > 47
                ? nycDate + 2
                : nycDate + nDate,
            nycDay: nDate === 1 ? day1bump : nDate > 1 ? day2bump : nycDay
          }));
        });
      };
      updateNyc();

      // *UPDATE SLC DATA VIA TIMER
      const updateSlc = () => {
        setEstSaltLake((prevState) => {
          return prevState.map((item) => ({
            ...item,
            slcSeconds:
              slcSeconds + nSec > 59 && ~~((slcSeconds + nSec) / 60) % 60
                ? slcMinutes + (~~((slcSeconds + nSec) / 60) % 60)
                : slcSeconds + nSec,
            slcMinutes:
              slcMinutes + nMin > 59 && ~~((slcMinutes + nMin) / 60) % 60
                ? slcHours + (~~((slcMinutes + nMin) / 60) % 60)
                : slcMinutes + nMin,
            slcHours:
              slcHours + nHours > 23 - slcHours &&
              ~~(slcHours + nHours / 24) % 24
                ? slcHours + (~~(slcHours + nHours / 24) % 24)
                : slcHours + nHours,
            slcDate:
              slcHours + nHours > 23 && slcHours + nHours < 47
                ? slcDate + 1
                : slcHours + nHours > 47
                ? slcDate + 2
                : slcDate + nDate,
            slcDay: nDate === 1 ? day1bump : nDate > 1 ? day2bump : slcDay
          }));
        });
      };
      updateSlc();

      // *UPDATE LONDON DATA VIA TIMER
      const updateLon = () => {
        setEstLondon((prevState) => {
          return prevState.map((item) => ({
            ...item,
            lonSeconds:
              lonSeconds + nSec > 59 && ~~((lonSeconds + nSec) / 60) % 60
                ? lonMinutes + (~~((lonSeconds + nSec) / 60) % 60)
                : lonSeconds + nSec,
            lonMinutes:
              lonMinutes + nMin > 59 && ~~((lonMinutes + nMin) / 60) % 60
                ? lonHours + (~~((lonMinutes + nMin) / 60) % 60)
                : lonMinutes + nMin,
            lonHours:
              lonHours + nHours > 23 - lonHours &&
              ~~(lonHours + nHours / 24) % 24
                ? lonHours + (~~(lonHours + nHours / 24) % 24)
                : lonHours + nHours,
            lonDate:
              lonHours + nHours > 23 && lonHours + nHours < 47
                ? lonDate + 1
                : lonHours + nHours > 47
                ? lonDate + 2
                : lonDate + nDate,
            lonDay: nDate === 1 ? day1bump : nDate > 1 ? day2bump : lonDay
          }));
        });
      };
      updateLon();
      console.log('dayBump1', day1bump);
    }
  }, [isActive]);

  console.log(estNYC);
  // * GET THE LONDON TIME
  const lonTimeZoneToState = () => {
    const londonTime = new Date().toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      dateStyle: 'full',
      timeStyle: 'full'
    });

    // *BREAK TIMEZONE INTO AN ARRAY
    const londonArray = londonTime.split(' ');

    // * BREAK DOWN TIME INTO HH:MM:SS
    const hour = parseInt(londonArray[5].split(':')[0]);
    const min = parseInt(londonArray[5].split(':')[1]);
    const sec = parseInt(londonArray[5].split(':')[2]);

    //* SET THE STATE
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

    // * BREAK DOWN TIME INTO HH:MM:SS
    const hour = parseInt(nycArray[5].split(':')[0]);
    const min = parseInt(nycArray[5].split(':')[1]);
    const sec = parseInt(nycArray[5].split(':')[2]);

    //* SET THE STATE
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

  // *SLC TIME
  const slcTimeZoneToState = () => {
    const slcTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      dateStyle: 'full',
      timeStyle: 'full'
    });

    // *BREAK TIMEZONE INTO AN ARRAY
    const slcArray = slcTime.split(' ');
    // * BREAK DOWN TIME INTO HH:MM:SS
    const hour = parseInt(slcArray[5].split(':')[0]);
    const min = parseInt(slcArray[5].split(':')[1]);
    const sec = parseInt(slcArray[5].split(':')[2]);

    //* SET THE STATE
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

  return (
    <>
      <ul className='timezone-wrapper'>
        <small className='timezone-heading'>Estimated deployment time:</small>
        <LondonTz estLondon={estLondon} handleDateEnd={handleDateEnd} />
        <NycTz estNYC={estNYC} handleDateEnd={handleDateEnd} />
        <SlcTz estSaltLake={estSaltLake} handleDateEnd={handleDateEnd} />
      </ul>
    </>
  );
};

export default TimeZone;
