var searchInput = document.getElementById('searchInput');
var yearInput = document.getElementById('yearInput');
var searchForm = document.getElementById('searchForm');
var booksGrid = document.getElementById('booksGrid');
var cards = booksGrid.querySelectorAll('.card');

function filterBooks() {
  var searchBy = searchForm.searchBy.value;
  var searchText = searchInput.value.trim().toLowerCase();
  var yearText = yearInput.value.trim();

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var title = card.getAttribute('data-title').toLowerCase();
    var author = card.getAttribute('data-author').toLowerCase();
    var publisher = card.getAttribute('data-publisher').toLowerCase();
    var year = card.getAttribute('data-year');

    var match = false;

    if (searchBy === 'title') {
      match = title.indexOf(searchText) !== -1;
    } else if (searchBy === 'author') {
      match = author.indexOf(searchText) !== -1;
    } else if (searchBy === 'publisher') {
      match = publisher.indexOf(searchText) !== -1;
    } else if (searchBy === 'titleYear') {
      var titleMatch = title.indexOf(searchText) !== -1;
      var yearMatch = yearText === '' || year === yearText;
      match = titleMatch && yearMatch;
    }

    if (match) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  }
}

searchInput.addEventListener('input', filterBooks);
yearInput.addEventListener('input', filterBooks);
searchForm.addEventListener('change', function() {
  if (searchForm.searchBy.value !== 'titleYear') {
    yearInput.value = '';
  }
  filterBooks();
});

filterBooks();
