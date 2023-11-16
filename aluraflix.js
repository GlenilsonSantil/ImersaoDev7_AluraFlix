var listaFilmes = [];

listaFilmes[0] =
  "https://f001.backblazeb2.com/file/papocine/2017/01/20170113-o-chamado-3-papo-de-cinema-cartaz.jpg";
listaFilmes[1] =
  "https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w";
listaFilmes[2] = "https://pbs.twimg.com/media/Fqn5dnCWYAIKzyZ.jpg:large";
listaFilmes[3] =
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg";
listaFilmes[4] =
  "https://www.coisasdemineira.com/wp-content/uploads/2019/04/looloo-206x300.jpg";

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
