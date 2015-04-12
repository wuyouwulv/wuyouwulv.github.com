var audio = document.createElement("audio");
	
function choose_music() {
	var id = Math.floor(Math.random()*2);
	var music_arr = new Array(2);
	music_arr[0] = "music/慢慢来比较快 - 梁静茹.mp3";
	music_arr[1] = "music/七里香 - 周杰伦.mp3";
	// music_arr[] = "music/";
	return music_arr[id];
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
