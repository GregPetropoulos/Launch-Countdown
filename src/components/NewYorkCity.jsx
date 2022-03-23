

const NewYorkCity = () => {
  const newYorkCityTimeZone = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short'
  });
    return (
    <div>New York City: {newYorkCityTimeZone}</div>
  )
}

export default NewYorkCity