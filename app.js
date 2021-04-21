var ip = '';
document.getElementById('countdown').style.display = "none";
var maghrib = null;
var loc = null;
let today = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
var day = today.getDate();
var m = today.getMonth();
const month = monthNames[m];
var date1 = month + ' ' + day + ', ' + today.getFullYear();
//=================================================================
fetch('https://api.ipify.org/?format=json', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.ip);
    ip = data.ip;
  }).then(time)
  .catch((error) => {
    console.error('Error:', error);
  });

async function time() {
  fetch(`https://www.islamicfinder.us/index.php/api/prayer_times?user_ip=${ip}&time_format=0`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      maghrib = data.results.Maghrib;
      loc = `${data.settings.location.country}, ${data.settings.location.city}`;
      document.getElementById("loc").innerText = loc;
    }).then(updateTime)
    .catch((error) => {
      console.error('Error:', error);
    });
}

function updateTime() {

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  //maghribTime = "Apr 15, 2021 18:24:00",
  let maghribTime = `${date1} ${maghrib}:00`,
    countDown = new Date(maghribTime).getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        distance = countDown - now;

      // document.getElementById("days").innerText = Math.floor(distance / (day)),
      if (Math.floor((distance % (day)) / (hour)) < 1) {
        document.getElementsByTagName('li')[0].style.display = "none";
        document.getElementById('minutes').style.marginRight = '40px';
        if (Math.floor((distance % (hour)) / (minute)) < 1) {
          document.getElementsByTagName('li')[1].style.visibility = "hidden";
        }
      }
      document.getElementById("headline").innerText = 'متبقي على اذان المغرب ',
        document.getElementById('countdown').style.display = "",
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      // if (hour = 0) {
      //   document.getElementById("hours").
      // }
      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = 'حان موعد المغرب، صومًا مقبولاً وإفطارًا شهيًا';
        headline.style.fontSize = '4rem'
        countdown.style.display = "none";
        clearInterval(x);
      }
      //seconds
    }, 0)
}
