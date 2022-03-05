var adjetivo = [
  'Iron',
  'Beautiful',
  'Sad',
  'Colorful',
  'Awesome',
  'Mexican',
  'Ridiculous'
];
var substantivo = [
  'Pants',
'Emo',
'Pen',
'Maiden',
'Hair',
'Notebooks',
'Dreams'
];
for (var prefixos of adjetivo) {
  for (var sufixos of substantivo) {
    console.log('The ' + prefixos + ' ' + sufixos);
  }
}
