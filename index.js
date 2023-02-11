// Function for sorting by name
const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector("rating #value");
    const parkBRating = parkB.querySelector("rating #value");
    if (parkARating < parkBRating) {
      return -1;
    } else if (parkARating > parkBRating) {
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
    const parksList = main.querySelectorAll(".park-display");
  
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
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#rating-sorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);
  

  console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");