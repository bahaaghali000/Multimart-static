let offerDays = document.getElementById("offer-days");
let offerHours = document.getElementById("offer-hours");
let offerMinutes = document.getElementById("offer-minutes");
let offerSeconds = document.getElementById("offer-seconds");

let navigation = document.querySelector(".navigation");
let mobileMenu = document.querySelector(".mobile__menu");

const countDown = () => {
  let interval;
  const destination = new Date("11/11/2024").getTime();

  interval = setInterval(() => {
    const now = new Date().getTime();

    const different = destination - now;

    const days = Math.floor(different / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((different % (1000 * 60)) / 1000);
    if (destination < 0) clearInterval(interval.current);
    else {
      offerDays.textContent = days;
      offerHours.textContent = hours;
      offerMinutes.textContent = minutes;
      offerSeconds.textContent = seconds;
    }
  });
};
countDown();

mobileMenu.addEventListener("click", () => {
  navigation.classList.toggle("active__menu");
});

navigation.addEventListener("click", () => {
  navigation.classList.remove("active__menu");
});
