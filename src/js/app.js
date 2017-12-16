/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

var menu = new UI.Menu({
  sections: [{
    items: [{
      title: 'Scheda 2'
    }, {
      title: 'Scheda 3'
    }]
  }]
});
menu.on('select', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.scrollable(true);
  card.subtitle('Is a Window');
  if (e.index === 0) {
    card.body('Riscaldamento, bpm 50% MFC :\r\n\r\n100 m crawl completo\r\n\r\n100 m dorso completo\r\n\r\n100 m rana completo\r\n\r\n \r\n\r\nA1 fase aerobica, bpm 55-60% MFC:\r\n\r\n2 x [8 x 25 m] crawl alternato con pausa di 2 sec. tra una bracciata e l\'altra e gambe alla massima frequenza possibile. Riposo 15 sec. tra uno scatto e l\'altro. Riposo di 1 min. tra le due serie\r\n\r\n\r\n \r\n\r\nA2 fase aerobica, bpm 65% MFC:\r\n\r\n4 x 50 m dorso completo. Riposo 15 sec. tra uno scatto e l\'altro\r\n\r\n20 x 25 m crawl completo con boccaglio. Riposo 10 sec. tra uno scatto e l\'altro\r\n\r\n \r\n\r\nDefaticamento:\r\n\r\n100 m a piacere');
  } else {
    card.body('Riscaldamento, bpm 50% MFC :\r\n\r\n200 m a piacere\r\n\r\n \r\n\r\nA2 fase aerobica, bpm 60% MFC:\r\n\r\n3 x 100 m, 50 m crawl completo + 50 m rana completa. Riposo 30 sec. tra uno scatto e l\'altro\r\n\r\n8 x 25 m, uno scatto delfino completo + uno scatto rana completa. Riposo 15 sec. tra uno scatto e l\'altro\r\n\r\n \r\n \r\n\r\nB1 soglia aerobica, bpm 75% MFC:\r\n\r\n8 x 25 m rana completa. Riposo 15 sec. tra uno scatto e l\'altro\r\n\r\n10 x 50 m braccia crawl con il galleggiante (pull buoy) tra le gambe. 25 m alla massima velocit\u00E0 e 25 m in scioltezza. Riposo 30 sec. tra uno scatto e l\'altro\r\n\r\n \r\n\r\nDefaticamento:\r\n\r\n200 m a piacere\r\n\r\n \r\n\r\nTot. 1600 m');
  }
    card.show();
  console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
  console.log('The item is titled "' + e.item.title + '"');
});
menu.show();