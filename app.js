<script>
  const toggleButton = document.getElementById('darkModeToggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambiar el texto del botón
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️ Modo Claro';
    } else {
      toggleButton.textContent = '🌙 Modo Oscuro';
    }
  });
  
</script>