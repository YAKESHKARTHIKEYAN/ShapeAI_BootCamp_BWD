import React from "react";

function Footer() {

  var currDate = new Date().getDate();
  var currMonth = new Date().getUTCFullYear();


  return (
    <footer>
      <p>Copyright @  {currDate} / {currMonth} 
          </p>
    </footer>
  );
}

export default Footer;
