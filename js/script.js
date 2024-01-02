// Toggle Class Active untuk hamburger-menu
const navbarNav = document.querySelector('.navbar-nav');
//Ketika hamburger-menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
 navbarNav.classList.toggle('active');
};

//Toggle Class active untuk search from
const searchForm = document.querySelector('.search-form');
const searchBox =document.querySelector('#search-box');
document.querySelector('#search-btn').onclick = (e) => {
 searchForm.classList.toggle('active'); 
// searchBox.focus();
 e.preventDefault();
};

// Kilk Diluar Element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-btn');

document.addEventListener('click',function (e) { if(!hm.contains(e.target)&& !navbarNav.contains(e.target)) {
  navbarNav.classList.remove('active')
}
})
document.addEventListener('click',function(e){ if(!sb.contains(e.target)&& !searchForm.contains(e.target)) {
  searchForm.classList.remove('active')
}
})
