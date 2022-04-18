const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const mq = window.matchMedia("(min-width: 800px)");


//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
  console.log("worked1"); 
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
  console.log("worked2"); 
});

//display aside after going from mobile to tablet and up
var mediaQueryList = window.matchMedia('(min-width: 769px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is more than 769 pixels wide */
   sideMenu.style.display = "block";

  } else {
    /* the viewport is 769 pixels wide or less */
   sideMenu.style.display = "none";
  }
}

mediaQueryList.addListener(screenTest);

    

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});



//fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                        <td>${order.productName}</td>  
                        <td>${order.productNumber}</td>  
                        <td>${order.paymentStatus}</td>  
                        <td class="${
                          order.shipping === "Declined"
                            ? "danger"
                            : order.shipping === "Pending"
                            ? "warning"
                            : "success"
                        }">${order.shipping}</td>  
                        <td class="primary">Details</td>       
                        `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});





