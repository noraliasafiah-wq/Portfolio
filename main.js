(function(){
  var buttons = document.querySelectorAll('.filters button');
  var cards = document.querySelectorAll('#grid .card');
  var empty = document.getElementById('empty');

  function apply(filter){
    var shown = 0;
    cards.forEach(function(card){
      var match = (filter === 'all') || (card.dataset.cat === filter);
      card.classList.toggle('is-hidden', !match);
      if (match) shown++;
    });
    empty.hidden = shown > 0;
  }

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      buttons.forEach(function(b){ b.setAttribute('aria-pressed', String(b === btn)); });
      apply(btn.dataset.filter);
    });
  });
})();
