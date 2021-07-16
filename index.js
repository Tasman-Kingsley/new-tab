function search() {
  const sInput = $('#searchInput').val();
  if ($('#goo').prop('checked')) {
    window.open(`https://www.google.com/search?q=${sInput}&btnG=Search`, '_self');
  } else {
    window.open(`https://duckduckgo.com/?q=${sInput}&t=h_&ia=web`, '_self');
  }
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    search();
  }
});

// https://duckduckgo.com/?q=jung&t=h_&ia=web
