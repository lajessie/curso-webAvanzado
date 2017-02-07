(function(){
'use strict';

angular.module("myApp",[]).controller("movieCtrl",movieCtrl);

function movieCtrl(){
  var movie = this;

  //movie.nombre= [{'nombre':'Luis','edad':'20'},{'nombre':'Donaldo','edad':'23'}];
  movie.collection=[
    {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    'name':'Interstellar',
    'cast':[' Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    'year':'2014',
    'category':'drama'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg',
    'name':'La la land',
    'cast':['Ryan Gosling', 'Emma Stone', 'Rosemarie DeWitt'],
    'year':'2016',
    'category':'musical'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    'name':'Resident Evil: Capítulo final ',
    'cast':['Milla Jovovich', 'Iain Glen', 'Ali Larter' ],
    'year':'2016',
    'category':'accion'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,757,1000_AL_.jpg',
    'name':'Forrest Gump',
    'cast':['  Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    'year':'1994',
    'category':'drama'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg',
    'name':'Rogue One: Una historia de Star Wars ',
    'cast':['Felicity Jones', 'Diego Luna', 'Alan Tudyk '],
    'year':'2016',
    'category':'accion'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MjU3MDIzOF5BMl5BanBnXkFtZTgwMjM2MzY2MDI@._V1_UY209_CR0,0,140,209_AL_.jpg',
    'name':'Passengers',
    'cast':[' Jennifer Lawrence', 'Chris Pratt', 'Michael Sheen'],
    'year':'2016',
    'category':'aventura'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,644,1000_AL_.jpg',
    'name':'El imperio contraataca',
    'cast':['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    'year':'1980',
    'category':'aventura'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,663,1000_AL_.jpg',
    'name':'Psicosis',
    'cast':[' Anthony Perkins', 'Janet Leigh', 'Vera Miles'],
    'year':'1960',
    'category':'terror'
  },
  {
    'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX670_AL_.jpg',
    'name':'La vida es bella',
    'cast':[' Roberto Benigni', 'Nicoletta Braschi', 'Giorgio Cantarini'],
    'year':'1997',
    'category':'drama'
  }

];
}


})();
