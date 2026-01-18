const launchDate = new Date("2026-03-01").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m`;
}, 1000);
