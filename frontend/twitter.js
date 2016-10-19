const followToggle = require('./follow_toggle');
const userSearch = require('./users_search');
$(() => {
  $('.follow-toggle').each(function (index, el) {
    new followToggle($(el));
  });
  $('.users-search').each(function (index, el) {
    new userSearch($(el));
  });

});
