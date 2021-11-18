const getTime = () => {
  const date = new Date();
  let hours = `${date.getHours()}`;
  let minutes = `${date.getMinutes()}`;
  let seconds = `${date.getSeconds()}`;

  if (hours.length === 1) {
    hours = "0" + hours;
  }

  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }

  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }

  const time = `${hours}:${minutes}:${seconds}`;

  return time;
};

module.exports = getTime;
