const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

function totalTimeVideos(videoTimeNodes) {
  const secondsInHour = 3600;
  const secondsInMinute = 60;

  const seconds = videoTimeNodes
    .map(node => node.dataset.time)
    .map(timeNode => {
      const [min, secs] = timeNode.split(':').map(parseFloat);
      return min * secondsInMinute + secs;
    })
    .reduce((total, secondsInVideo) => total + secondsInVideo);

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / secondsInHour);
  secondsLeft %= secondsInHour;

  const minutes = Math.floor(secondsLeft / secondsInMinute);
  secondsLeft %= secondsInMinute;

  return `${hours}:${minutes}:${secondsLeft}`;
}

console.log(totalTimeVideos(timeNodes));
