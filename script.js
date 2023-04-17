// Dodajemy klasę 'fade-out' do elementów po upływie 2 sekund
setTimeout(function() {
  const overlay = document.querySelector('.black-overlay');
  const logo = document.querySelector('.logo5');

  overlay.classList.add('fade-out');
  logo.classList.add('fade-out');
}, 1000);

// Usuwamy element .black-overlay po upływie 4 sekund
setTimeout(function() {
  const overlay = document.querySelector('.black-overlay');
  overlay.remove();
}, 2000);



// Back to top button



const scrollBtn = document.querySelector('#scrollBtn');
scrollBtn.addEventListener('click', () => {
  window.scrollBy({
    top: -10000, 
    behavior: 'smooth'
  });
});


// Blokada odswiezenia strony

const newsletterForm = document.querySelector('.newsletter form');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault(); // zablokowanie domyślnej akcji przeglądarki
  // dodaj kod do przetwarzania danych formularza i wysyłania ich na serwer
});


