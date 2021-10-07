function search() {
  const sInput = $('#searchInput').val();
  if ($('#brav').prop('checked')) {
    window.open(`https://search.brave.com/search?q=${sInput}`, '_self');
  } else {
    window.open(`https://www.google.com/search?q=${sInput}`, '_self');
  }
}

document.getElementById('searchInput').focus();

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    search();
  }
});
