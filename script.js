


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// .topnav {
//   background-color: transparent;
//   overflow: hidden;
// }

// /* Style the links inside the navigation bar */
// .topnav a {
//   float: left;
//   display: block;
//   color: black;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
//   font-family: "Lucida Console", "Courier New", monospace;
// }

// /* Change the color of links on hover */
// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// /* Add an active class to highlight the current page */
// .topnav a.active {
//   background-image: url("mountain.jpg");
//   color: black;
//   margin-top: -10px;
// }

// /* Hide the link that should open and close the topnav on small screens */
// .topnav .icon {
//   display: none;
// }