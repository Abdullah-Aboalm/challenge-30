const myDay = document.querySelector("#day");
const myDayLaErr = document.querySelector("#Err-label-day");
const myDayPErr = document.querySelector("#Err-day");
const myDaySpan = document.querySelector("#S-day");

const myMonth = document.querySelector("#month");
const myMonthLaErr = document.querySelector("#Err-label-month");
const myMonthPErr = document.querySelector("#Err-month");
const myMonthSpan = document.querySelector("#S-month");

const myYear = document.querySelector("#year");
const myYearLaErr = document.querySelector("#Err-label-year");
const myYearPErr = document.querySelector("#Err-year");
const myYearSpan = document.querySelector("#S-year");

const myBtn = document.querySelector("#Btn");

const myDate = new Date();

myBtn.addEventListener("click", () => {
  if (
    myDay.value.length === 0 &&
    myMonth.value.length === 0 &&
    myYear.value.length === 0
  ) {
    myDayLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myDayPErr.style.cssText = "display: block;";
    myDay.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
    myMonthLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myMonthPErr.style.cssText = "display: block;";
    myMonth.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  }
  // !day
  if (myDay.value.length === 0) {
    myDayLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myDayPErr.style.cssText = "display: block;";
    myDay.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else if (isNaN(Number(myDay.value))) {
    myDayLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myDayPErr.style.cssText = "display: block;";
    myDayPErr.textContent = "Must be a valid date";
    myDay.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else if (myDay.value < 1 || myDay.value > 31) {
    myDayLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myDayPErr.style.cssText = "display: block;";
    myDayPErr.textContent = "Must be a valid day";
    myDay.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else {
    myDayLaErr.style.cssText = "color: gray;";
    myDayPErr.style.cssText = "display: none;";
    myDay.style.cssText =
      "border-color: rgba(128, 128, 128, 0.705); rgb(147, 53, 255);";
    myDaySpan.textContent = `${myDate.getDate() - myDay.value}`;
  }
  // !month
  if (myMonth.value.length === 0) {
    myMonthLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myMonthPErr.style.cssText = "display: block;";
    myMonth.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else if (isNaN(Number(myMonth.value))) {
    myMonthLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myMonthPErr.style.cssText = "display: block;";
    myMonthPErr.textContent = "Must be a valid date";
    myMonth.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else if (myMonth.value < 1 || myMonth.value > 12) {
    myMonthLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myMonthPErr.style.cssText = "display: block;";
    myMonthPErr.textContent = "Must be a valid month";
    myMonth.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else {
    myMonthLaErr.style.cssText = "color: gray;";
    myMonthPErr.style.cssText = "display: none;";
    myMonth.style.cssText =
      "border-color: rgba(128, 128, 128, 0.705); rgb(147, 53, 255);";
    myMonthSpan.textContent = `${myMonth.value - (myDate.getMonth() + 1)}`;
  }
  // !year
  if (myYear.value.length === 0) {
    myYearLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myYearPErr.style.cssText = "display: block;";
    myYear.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else if (isNaN(Number(myYear.value))) {
    myYearLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myYearPErr.style.cssText = "display: block;";
    myYearPErr.textContent = "Must be a valid date";
    myYear.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else if (myYear.value < 1 || myYear.value > myDate.getFullYear()) {
    myYearLaErr.style.cssText = "color: rgb(249, 62, 62);";
    myYearPErr.style.cssText = "display: block;";
    myYearPErr.textContent = "Must be a in the past";
    myYear.style.cssText =
      "border-color: rgb(249, 62, 62); outline-color: rgb(249, 62, 62);";
  } else {
    myYearLaErr.style.cssText = "color: gray;";
    myYearPErr.style.cssText = "display: none;";
    myYear.style.cssText =
      "border-color: rgba(128, 128, 128, 0.705); rgb(147, 53, 255);";
    myYearSpan.textContent = `${myDate.getFullYear() - 1 - myYear.value}`;
  }
  if (myDay.value.length === 0 || isNaN(Number(myDay.value))) {
    myYearSpan.textContent = "- -";
    myMonthSpan.textContent = "- -";
  }
  if (myMonth.value.length === 0 || isNaN(Number(myMonth.value))) {
    myYearSpan.textContent = "- -";
    myDaySpan.textContent = "- -";
  }
  if (myYear.value.length === 0 || isNaN(Number(myDay.value))) {
    myDaySpan.textContent = "- -";
    myMonthSpan.textContent = "- -";
  }
});

myDay.addEventListener("input", () => {
  myDayLaErr.style.cssText = "color: gray;";
  myDayPErr.style.cssText = "display: none;";
  myDay.style.cssText =
    "border-color: rgba(128, 128, 128, 0.705); rgb(147, 53, 255);";
  myDaySpan.textContent = "- -";
});

myMonth.addEventListener("input", () => {
  myMonthLaErr.style.cssText = "color: gray;";
  myMonthPErr.style.cssText = "display: none;";
  myMonth.style.cssText =
    "border-color: rgba(128, 128, 128, 0.705); rgb(147, 53, 255);";
  myMonthSpan.textContent = "- -";
});

myYear.addEventListener("input", () => {
  myYearLaErr.style.cssText = "color: gray;";
  myYearPErr.style.cssText = "display: none;";
  myYear.style.cssText =
    "border-color: rgba(128, 128, 128, 0.705); rgb(147, 53, 255);";
  myYearSpan.textContent = "- -";
});
