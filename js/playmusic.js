var audio = document.createElement("audio");
	
function choose_music() {
	var id = Math.floor(Math.random()*6);
	var music_arr = new Array(2);
	music_arr[0] = "music/�Ҵ����� - ����.mp3";
	music_arr[1] = "music/���� - �Ƴ��ֶ�.mp3";
	music_arr[2] = "music/��į��į�ͺ� - �����.mp3";
	music_arr[3] = "music/ħ���е���ʹ - �����.mp3";
	music_arr[4] = "music/����֮�� - TFBOYS.mp3";
	music_arr[5] = "music/��ӣ�� - �ɶ�����.mp3";
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
