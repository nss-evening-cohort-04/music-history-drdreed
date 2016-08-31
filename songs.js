let songs;

function loadSongs() {
  let data = JSON.parse(this.response);
  songs = data.songs;
  renderSongs();
}

function failSongs() {
  console.log("Failed to load songs!");
}

var getSongs = new XMLHttpRequest();
getSongs.addEventListener("load", loadSongs);
getSongs.addEventListener("error", failSongs);
getSongs.open("GET", "songs.json");
getSongs.send();

var finalStr = "";
var content = document.getElementById("content");

function renderSongs() {
  let songList = songs.map((song)=>{
    return `
    <div>
      <h2>${song.title}</h2>
      <div>${song.artist} | ${song.album} | ${song.genre}</div>
      <button type="button" class="delete-button">Delete</button>
    </div>
    `;
  }).join("");
  content.innerHTML = songList;
  content.innerHTML += `<button type="button" name="button" id="load-more">More ></button>`;
  addEventListeners();

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
  var newSong = {};
  newSong.id = "";
  newSong.title = songName;
  newSong.artist = songArtist;
  newSong.album = songAblum;
  newSong.genre = "";
  songs.push(newSong);
  console.log('songs', songs);
  renderSongs();
}

function addEventListeners() {
  var classname = document.getElementsByClassName("delete-button");
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', deleteSongNode, false);
  }
  document.getElementById('load-more').addEventListener('click', moreSongs);
}

function deleteSongNode(e) {
  let childNode = e.currentTarget.parentNode;
  childNode.parentNode.removeChild(childNode);
}

function moreSongs() {

  function loadMoreSongs() {
    let data = JSON.parse(this.response);
    let moreSongs = data.songs;
    moreSongs.map((song) => {
      songs.push(song);
    });
    renderSongs();
  }

  function failMoreSongs() {
    console.log('Failed to load more songs!');
  }

  var getSongs = new XMLHttpRequest();
  getSongs.addEventListener("load", loadMoreSongs);
  getSongs.addEventListener("error", failMoreSongs);
  getSongs.open("GET", "songs1.json");
  getSongs.send();
}

document.getElementById('addBtn').addEventListener('click', addSong);
