var songs = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Granddaddy's Gun > by Aaron Lewis on the album The Road");
songs.push("Straight Outta Cold Beer > by Blake Shelton on the album If I'm Honest");

var finalStr = "";
var content = document.getElementById("content");

function renderSongs() {
  let songList = songs.map((song)=>{
    song.replace(">", "-");
    song.replace("@","");
    song.replace("!","");
    song.replace("*","");
    song.replace("(","");
    return "<p>" + song + "</p>";
  }).join("");
  content.innerHTML = songList;
}

var addMusicLink = document.getElementById('add-music-link');
var viewMusicLink = document.getElementById('view-music-link');

var addMusicView = document.getElementById('add-music-view');
var listMusicView = document.getElementById('list-music-view');

addMusicLink.addEventListener('click', function (e) {
  e.preventDefault();
  addMusicView.classList.remove('hidden');
  listMusicView.classList.add('hidden');
});

viewMusicLink.addEventListener('click', function (e) {
  e.preventDefault();
  addMusicView.classList.add('hidden');
  listMusicView.classList.remove('hidden');
});

function addSong() {
  let songName = document.getElementById('song-name').value;
  let songArtist = document.getElementById('song-artist').value;
  let songAblum = document.getElementById('song-album').value;

  songs.push(`${songName} > by ${songArtist} on the album ${songAblum}`);
  console.log('songs', songs);
  renderSongs();
}

document.getElementById('addBtn').addEventListener('click', addSong);

renderSongs();
