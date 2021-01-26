// function for handling the favorite click
const favBtnClickHandler = (event) => {
  const park = event.target.parentNode;
  park.style.backgroundColor = '#c8e6c9';
}

// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// function to sort parks by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.querySelector("div .rating").innerText;
  const parkBRating = parkB.querySelector("div .rating").innerText;
  if (parkARating < parkBRating) {
    return -1;
  } else if (parkARating > parkBRating) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `ratingSorter` click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};
// code that runs once the DOM is loaded
const main = () => {
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#nameSorter");

  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#ratingSorter");

  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll('.rateBtn');

  // loop thru buttons and add event handler for each
  allBtns.forEach(btn => {
    btn.addEventListener("click", favBtnClickHandler);
  });
}

// add event listener for 'DOMContentLoaded'
window.addEventListener("DOMContentLoaded", main);


// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//   console.log('You clicked the button', event);
// })

// const descriptions = document.querySelectorAll(".description");

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;

//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content += '<a href="#">...</a>';
//   }

//   // console.log(content);
//   desc.innerHTML = content;
// }

// bold any rating value that is greater than 4.7.
// const ratings = document.querySelectorAll(".rating .value");

// iterate through the list and get each actual rating value using the innerText property. This returns a string value, but you want to work with the rating as a number. So, use the parseFloat() method to convert a string into a floating point number, as shown below:

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   // console.log(ratingValue);
//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }

// const parks = document.querySelectorAll('.park');
// const totalParks = parks.length;

// const newElement = document.createElement("div");

// newElement.innerText = `${totalParks} exciting parks to visit`;
// newElement.classList.add('header-statement');

// const header = document.querySelector('header');
// header.appendChild(newElement);

// const heading = document.querySelector("h1");
// console.log(heading);

// Find an element with the class value.
// const value = document.querySelector(".value");
// console.log(value);

// Find a <button> element.
// const button = document.querySelector("button");
// console.log(button);

// Find an element with the class area.
// const area = document.querySelector(".area");
// console.log(area);

// Find a <div> that is a descendant of an element with the class stat. (Hint: Look up descendant selectors in the documentation).
// const stat = document.querySelector(".stat div");
// console.log(stat);

// Find an element with the class hello. Take careful note of what is returned there.
// const hello = document.querySelector(".hello");
// console.log(hello);

// Find all the buttons on the page
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// Get a list of all the <div> elements containing ratings on the page. Log them to the console using the values() method.
// const ratingList = document.querySelectorAll("div .rating");
// for (let element of ratingList.values()) {
//   console.log(element);
// }
// Get a list of all the <div> elements containing areas on the page. Log them to the console using a simple for loop.
// const areaList = document.querySelectorAll("div .area");

// for (let i = 0; i < areaList.length; i++) {
//     const element = areaList[i];
//     console.log(element);
//   }