

const SaltLakeCity = () => {
  const saltLakeCityTimeZone = new Date().toLocaleString('en-US', {
    timeZone: 'America/Denver',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return <div>Salt Lake City: {saltLakeCityTimeZone}</div>;
};

export default SaltLakeCity;
