var audio = document.createElement("audio");
var music_id;	

function choose_music() {
	var id = Math.floor(Math.random()*12);
	music_id = id;
	var music_path = "music/" + id + ".mp3";
	return music_path;
}
			
function play_music() {
	document.getElementById("playmusic").innerHTML = "THE NEXT";
	if (audio != null && audio.canPlayType && audio.canPlayType("audio/mpeg"))
	{
			
		audio.src = choose_music();
		show_music();
		audio.addEventListener('ended', function () {
			// Wait 500 milliseconds before next loop
			setTimeout(play_music(), 500);
		}, false);
		audio.play();
	}
}

function stop_music() {
	audio.src = "";
	document.getElementById("playmusic").innerHTML = "MUSIC ON";
	document.getElementById("showmusic").innerHTML = "";
	audio.play();
}

function show_music() {
	if(music_id == 0) document.getElementById("showmusic").innerHTML = "正在播放  慢慢来比较快 - 梁静茹";
	else if(music_id == 1) document.getElementById("showmusic").innerHTML = "正在播放  七里香 - 周杰伦";
	else if(music_id == 2) document.getElementById("showmusic").innerHTML = "正在播放  当爱在靠近 - 刘若英";
	else if(music_id == 3) document.getElementById("showmusic").innerHTML = "正在播放  烦恼歌 - 张学友";
	else if(music_id == 4) document.getElementById("showmusic").innerHTML = "正在播放  宁夏 - 梁静茹";
	else if(music_id == 5) document.getElementById("showmusic").innerHTML = "正在播放  向左转向右转 - 梁静茹";
	else if(music_id == 6) document.getElementById("showmusic").innerHTML = "正在播放  一首简单的歌 - 王力宏";
	else if(music_id == 7) document.getElementById("showmusic").innerHTML = "正在播放  成全 - 刘若英";
	else if(music_id == 8) document.getElementById("showmusic").innerHTML = "正在播放  匆匆那年 - 王菲";
	else if(music_id == 9) document.getElementById("showmusic").innerHTML = "正在播放  平凡之路 - 朴树";
	else if(music_id == 10) document.getElementById("showmusic").innerHTML = "正在播放  依然爱你 - 王力宏";
	else document.getElementById("showmusic").innerHTML = "正在播放  Kaze wo Atsumete";
}
			
//play_music();
