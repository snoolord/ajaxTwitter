class userSearch {
  constructor(search) {
    this.search = search;
    this.users = $(this.search.find('.users'));
    this.searchSubmit = $(this.search.find('search-submit'));
    this.searchSubmit.on('input', this.handleInput.bind(this));
    console.log(this.users);
  }
}

module.exports = userSearch;
