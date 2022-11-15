$(document).ready(function() {  
    PopUpHide();
});

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

function Send() {
var json = '{"key": "Форма была отправлена"}';
var obj = JSON.parse(json);
alert(obj.key);
var xhr = new XMLHttpRequest();
function go() {
  xhr.open('GET', '/web8/json/a.txt', false);
  xhr.send();
  var element = document.getElementById('frag');
  element.innerHTML = xhr.responseText;
  return false;
    }
}


let openPopupButtons = document.querySelectorAll('#open-popup');
let closePopupButton = document.querySelector('#close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      window.onpopstate = function () {
        window.history.back();
        popupBg.classList.remove('active');
        popup.classList.remove('active');
      };
      history.pushState({ page: 1 }, 'form', '?form');
      popupBg.classList.add('active');
      popup.classList.add('active');
    });
  });

  closePopupButton.addEventListener('click', () => {
    window.history.back();
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });