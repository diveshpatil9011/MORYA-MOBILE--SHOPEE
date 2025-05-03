window.onload = () => {
  const popup = document.getElementById('offer-popup');
  const closeBtn = document.querySelector('.popup .close');

  popup.style.display = 'block';

  closeBtn.onclick = () => {
    popup.style.display = 'none';
  };

  setTimeout(() => {
    popup.style.display = 'none';
  }, 10000); // auto-close after 10 seconds
};
