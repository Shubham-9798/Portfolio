// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;
console.log(menuBtn);

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// //fetch
// const name = document.querySelector('#name')
// const comment = document.querySelector('#msg')

// // display
// const msg = document.querySelector('.msg')
// const user = document.querySelector('.ndt')
// console.log(user)

// const btnOk = document.getElementById("ok");
// const btnCancel = document.getElementById("cancel");

// btnOk.addEventListener("click", function(){
//    console.log("btnok");
//    const data =
//      {   name : name.value,
//          comment : comment.value
//      }
//      const dataJson = JSON.stringify(data);
//      console.log(data);
// });

// btnCancel.addEventListener("click", function(){
//   console.log("btnCancel");
//   name.value = "";
//   comment.value = "";
// });

// // console.log(document.querySelector('.comment'))