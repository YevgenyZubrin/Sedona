var rangeValue = document.querySelector(".filters-field__range");
var rangeValueText = document.querySelector(".filters-field__text");

rangeValueText.value = rangeValue.value;

rangeValue.addEventListener('change', function(evt) {
    evt.preventDefault();
    rangeValueText.value = rangeValue.value;
});

rangeValueText.addEventListener('change', function(evt) {
    evt.preventDefault();
    rangeValue.value = rangeValueText.value;
});