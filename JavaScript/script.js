let mobile_navbar_menu = document.querySelector(".toggle-menu");
let header = document.querySelector(".Section-Navbar");
let nav_list = document.querySelector(".nav-list");
let nav_item = document.querySelectorAll(".nav-item");

// FOR STICKY NAVBAR
// window.addEventListener("scroll",()=>{
//   if(window.pageYOffset>=180){
//     header.classList.add("sticky")
//   }else{
//     header.classList.remove("sticky")
//   }
//   // console.log("ok")
// })
// FOR TOGGLE NAVBAR
mobile_navbar_menu.addEventListener("click", () => {
  header.classList.toggle("active");
});


// FOR REMOVE ACTIVE CLASS
for(let navItem of nav_item){
    navItem.addEventListener("click",function(){
        header.classList.remove("active")
    })
}