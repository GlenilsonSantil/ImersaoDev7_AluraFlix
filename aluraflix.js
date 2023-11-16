

var listaFilmes = ["https://f001.backblazeb2.com/file/papocine/2017/01/20170113-o-chamado-3-papo-de-cinema-cartaz.jpg", 
                   "https://images.uncyc.org/pt/b/bd/Interstellar-2014-Movie-Poster.jpg",
                   "https://pbs.twimg.com/media/Fqn5dnCWYAIKzyZ.jpg", 
                   "https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg", 
                   "https://www.coisasdemineira.com/wp-content/uploads/2019/04/looloo-206x300.jpg"];

var nomeFilmes = ['O CHAMADO' , 'INTERSTELLAR','AVATAR', 'AS CRONICAS DE NARNIA', 'O MENINO QUE DESCOBRIU O VENTO'];

document.write('<div class="container_todosFilmes">');

document.write('<style>');
document.write('.container_filme p {color: white;}');
document.write('</style>');

var i = 0; 
while (i < listaFilmes.length){
  if ((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))) {
      document.write('<div class="container_filme">');
  document.write('<img src="' + listaFilmes[i] + '">');
    document.write('<p>' + nomeFilmes[i] + '</p>');
    document.write('</div>')
      }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo JPEG ou JPG </p>');
}
   i++;

}
document.write('</div>');


