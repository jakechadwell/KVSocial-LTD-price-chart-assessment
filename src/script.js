$(document).ready(function() {
  if ($('.table').length > 0) {
    $('.table .header').on('click', function() {
      $(this).toggleClass("active", "").nextUntil('.header').css('display', function(i, v) {
        return this.style.display === 'table-row' ? 'none' : 'table-row';
      });
    });
  }
})