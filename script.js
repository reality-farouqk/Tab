let tabBtn = document.querySelectorAll(".wrapper .tabs_wrap > ul > li");
let tabContent = document.querySelectorAll(".tabContent");

// Runs when any of the buttons are clicked
function btnClicked(index) {
  tabBtn.forEach((btnElem, i) => {
    if (btnElem.classList.contains("active") && i !== index)
      btnElem.classList.toggle("active");
    
    if (i === index) btnElem.classList.add("active");
  });

  //Runs after this present function runs. Hence, Shows tab content.
  showContent(index);
  console.log('clicked!');
}

// Show Content for the button
function showContent(index) {
  tabContent.forEach((item, i) => {
    if (item.classList.contains("active") && i !== index)
      item.classList.toggle("active");

    if (i === index) item.classList.add("active");
  });
}
