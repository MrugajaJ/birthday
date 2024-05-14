document.addEventListener("DOMContentLoaded", function() {
    var card = document.querySelector('.card');
    setTimeout(function() {
      card.classList.add('show');
    }, 1000); // Adjust delay as needed for the card to appear
  });
  
  function displayMessage() {
    var clickMeText = document.querySelector('.click-me');
    var card = document.querySelector('.card');
    if (clickMeText) {
      clickMeText.style.display = 'none';
      card.innerHTML = '<h1><em>Happy Birthday Ninad!</em></h1>';
    }
  }
  