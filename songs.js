var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Granddaddy's Gun > by Aaron Lewis on the album The Road");
songs.push("Straight Outta Cold Beer > by Blake Shelton on the album If I'm Honest");

var finalStr = "";
var content = document.getElementById("content");

for (x in songs){
  var songInfo = songs[x]
  songInfo = songInfo.replace(">", "-");
  songInfo = songInfo.replace("@","");
  songInfo = songInfo.replace("!","");
  songInfo = songInfo.replace("*","");
  songInfo = songInfo.replace("(","");

  content.innerHTML += "<p>" + songInfo + "</p";
}
