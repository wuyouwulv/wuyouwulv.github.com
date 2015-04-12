var audio = document.createElement("audio");
	
function choose_music() {
	var id = Math.floor(Math.random()*6);
	var music_arr = new Array(2);
	music_arr[0] = "music/匆匆那年 - 王菲.mp3";
	music_arr[1] = "music/天堂 - 唐朝乐队.mp3";
	music_arr[2] = "music/寂寞寂寞就好 - 田馥甄.mp3";
	music_arr[3] = "music/魔鬼中的天使 - 田馥甄.mp3";
	music_arr[4] = "music/信仰之名 - TFBOYS.mp3";
	music_arr[5] = "music/雨樱花 - 飞儿乐团.mp3";
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
			
play_music();
