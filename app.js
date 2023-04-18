<p id="result"></p>

<script>
  const form = document.querySelector('form');
  const result = document.querySelector('#result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const suppliers = parseInt(document.querySelector('#suppliers').value);
    const availableSlots = suppliers * 192;
    
    result.textContent = `제공이 가능한 프로모션 슬롯: ${availableSlots}개`;
  });
</script>
