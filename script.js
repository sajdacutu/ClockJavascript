let one = document.getElementsByClassName("clock-item");
let clockText = document.getElementById("clock-text");

let morningTime = document.querySelectorAll("select");
let feedTime1 = document.getElementById("feed-time1");
let feedTime2 = document.getElementById("feed-time2");
let feedTime3 = document.getElementById("feed-time3");
let feedTime4 = document.getElementById("feed-time4");

let morningText = document.getElementById("greet");
let morningImg = document.getElementById("status-pic");

function clockstart() {
  let AMPM = "";
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();

  if (hrs < 12) {
    clockText.innerHTML = "GRAB SOME HEALTY PART";
  } else if (hrs > 12 && hrs <= 16) {
    clockText.innerHTML = "LET'S HAVE LUNCH";
  } else if (hrs >= 16 && hrs <= 20) {
    clockText.innerHTML = "STOP YAWNING, Have Some TEA";
  } else {
    clockText.innerHTML = "CLose Your Eyes and Go To Sleep";
  }

  if (hrs > 12) {
    hrs -= 12;
    AMPM = "PM";
  } else {
    AMPM = "AM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  one[0].innerHTML = `${hrs}`;
  one[1].innerHTML = `${mins}`;
  one[2].innerHTML = `${secs}`;
  one[3].innerHTML = `${AMPM}`;
}


setInterval(() => {
  clockstart();
}, 1000);

function changeText(text) {
    const button = document.querySelector('.alarm-box');
    button.textContent = text;
  }

function setAlarm() {
  let time = new Date();
  let hrs = time.getHours();

  const selectedItems = [];

  const selectElements = document.querySelectorAll('.select-time');
  
  selectElements.forEach(selectElement => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedText = selectedOption.textContent;
    selectedItems.push(selectedText);
  });



  feedTime1.innerHTML = `${selectedItems[0]}`;
  feedTime2.innerHTML = `${selectedItems[1]}`;
  feedTime3.innerHTML = `${selectedItems[2]}`;
  feedTime4.innerHTML = `${selectedItems[3]}`;
  

  if (parseInt(morningTime[0].value) === hrs) {
    morningText.innerHTML = `Good Morning!! Wake up!`;
    morningImg.src = "./assets/good_morning.svg";
  } else if (parseInt(morningTime[1].value) === hrs) {
    morningText.innerHTML = `Good Afternoon!! Have your Diet`;
    morningImg.src = "./assets/luch.png";
  } else if (parseInt(morningTime[2].value) === hrs) {
    morningText.innerHTML = `Good Evening!!`;
    morningImg.src = "./assets/goodevening.png";
  } else if (parseInt(morningTime[3].value) === hrs) {
    morningText.innerHTML = `Good Night!! Sleep well`;
    morningImg.src = "./assets/nap.svg";
  }
}
