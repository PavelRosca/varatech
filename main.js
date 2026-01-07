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

});

// Formular - trimite prin EmailJS
var form = document.getElementById('contact-form');
var btn = document.querySelector('#contact-form button[type="submit"]');
if(form){

  console.log('Form found');
  form.addEventListener('submit', function(e){
    console.log('Submit event triggered');
    e.preventDefault();
    console.log('EmailJS loaded:', typeof emailjs);
    if (typeof emailjs === 'undefined') {
      alert('Serviciul de email nu este disponibil. Încearcă mai târziu.');
      return;
    }
    if(btn) btn.textContent = 'Se trimite...';

    emailjs.sendForm('service_oi33mbj', 'template_cg1uwn3', form)
      .then(function(response) {
        console.log('Success:', response);
        alert('Mesajul a fost trimis cu succes!');
        form.reset();
        if(btn) btn.textContent = 'Trimite';
      }, function(error) {
        console.error('Error:', error);
        alert('Eroare la trimiterea mesajului: ' + JSON.stringify(error));
        if(btn) btn.textContent = 'Trimite';
      });
  });
}

// Service cards expansion
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.closest('.card');
    const isExpanded = card.classList.contains('expanded');
    
    if (isExpanded) {    
      card.classList.remove('expanded');
    } else {
      document.querySelectorAll('.card.expanded, .portfolio-card.expanded')
      .forEach(c => c.classList.remove('expanded'));
      card.classList.add('expanded');
    }
    // If already expanded, do nothing (stay open)
  });
});