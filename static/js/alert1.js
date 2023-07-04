const registrationBtns = document.querySelectorAll('.registration-btn');

registrationBtns.forEach(function(button) {
  button.addEventListener('click', function() {
    alert('Registrační formulář momentálně není k dispozici. Zkuste to prosím později.');
  });
});