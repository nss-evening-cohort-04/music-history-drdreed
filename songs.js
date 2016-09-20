let songs;
function loadSongs(songData) {
  songs = songData.songs;
  renderSongs(songs);
}

function failSongs() {
  console.log("Failed to load songs!");
}

var getSongs = $.ajax("songs.json").done(loadSongs).fail(failSongs);
var finalStr = "";
var content = $("#content");

function renderSongs(songs) {
  let songList = songs.map((song)=>{
    return `
    <div>
      <h2>${song.title}</h2>
      <div>${song.artist} | ${song.album} | ${song.genre}</div>
      <button type="button" class="delete-button">Delete</button>
    </div>
    `;
  }).join("");
  $("#content").html(songList);
  $(`<button type="button" name="button" id="load-more">More ></button>`).appendTo(content);
  addEventListeners();
}

var addMusicLink = $('#add-music-link');
var viewMusicLink = $('#view-music-link');

var addMusicView = $('#add-music-view');
var listMusicView = $('#list-music-view');

addMusicLink.click(function (e) {
  e.preventDefault();
  addMusicView.removeClass('hidden');
  listMusicView.addClass('hidden');
});

viewMusicLink.click(function (e) {
  addMusicView.addClass('hidden');
  listMusicView.removeClass('hidden');
});

function addSong() {
  let songName = $('#song-name').val();
  let songArtist = $('#song-artist').val();
  let songAblum = $('#song-album').val();
  var newSong = {};
  newSong.id = "";
  newSong.title = songName;
  newSong.artist = songArtist;
  newSong.album = songAblum;
  newSong.genre = "";
  songs.push(newSong);
  console.log('songs', songs);
  renderSongs(songs);
}

function addEventListeners() {
  $(document).on('click', '.delete-button', deleteSongNode);
  $('#load-more').click(moreSongs);
}

function deleteSongNode() {
  $( this ).parent().remove();
}

function moreSongs(){
  $.ajax("songs1.json").done(loadMoreSongs).fail(failMoreSongs);
}

function loadMoreSongs(moreSongs) {
    let songs1 = moreSongs.songs;
    songs1.map((song) => {
      songs.push(song);
    });
  renderSongs(songs);
}

function failMoreSongs() {
  console.log('Failed to load more songs!');
}

$('#addBtn').click(addSong);
