const form = document.querySelector('#slot-form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const suppliers = parseInt(document.querySelector('#suppliers').value);
  const slots = parseInt(document.querySelector('#slots').value);
  
  const availableSlots = suppliers * slots;
  
  result.textContent = `${availableSlots}개`;
});
