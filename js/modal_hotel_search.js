var motelSearchOpen = document.querySelector(".motel-search__button");
var motelSearch = document.querySelector(".modal-search");
var firstField = motelSearch.querySelector("[name = arrival_date]");

motelSearchOpen.addEventListener('click', function(evt){
    evt.preventDefault();
    motelSearch.classList.toggle("modal-show");
    firstField.focus();
})
