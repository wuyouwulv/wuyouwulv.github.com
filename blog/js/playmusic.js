var audio = document.createElement("audio");
	
function choose_music() {
	var id = Math.floor(Math.random()*7);
	var music_path = "../music/" + id + ".mp3";
	return music_path;
}
			
function play_music() {
	if (audio != null && audio.canPlayType && audio.canPlayType("audio/mpeg"))
	{
			
		audio.src = choose_music();
		audio.addEventListener('ended', function () {
			// Wait 500 milliseconds before next loop
			setTimeout(play_music(), 500);
		}, false);
		audio.play();
	}
}

function stop_music() {
	audio.src = "";
	audio.play();
}
			
//play_music();
