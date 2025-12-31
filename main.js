// main.js - meniu mobil și trimitere formular prin EmailJS
document.addEventListener('DOMContentLoaded', function(){
  // Anul curent în footer
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Toggle nav (mobil)
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', function(){
      nav.classList.toggle('show');
    });
    // inchide nav la click pe link
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){nav.classList.remove('show')});
    });
  }

  // Inițializează EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init('S15vBRm9ZaDcrZRVx');
  }

  // Formular - trimite prin EmailJS
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (typeof emailjs === 'undefined') {
        alert('Serviciul de email nu este disponibil. Încearcă mai târziu.');
        return;
      }
      emailjs.sendForm('service_oi33mbj', 'template_cg1uwn3', this)
        .then(function() {
          alert('Mesajul a fost trimis cu succes!');
          form.reset();
        }, function(error) {
          alert('Eroare la trimiterea mesajului: ' + error.text);
        });
    });
  }
});