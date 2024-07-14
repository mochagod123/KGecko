'use strict';

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
		if (window.location.href == "https://kahoot.it/instructions")
		{
			var a = document.getElementsByClassName("styles__AvatarFaceContainer-sc-1svtpgv-6 clWA-Dk")[0];			
			a.innerHTML = "<img src=" + localStorage.getItem("avatar") + ">"
		}
		else if (window.location.href == "https://kahoot.it/answer/result")
		{
			var a = document.getElementsByClassName("styles__AvatarFaceContainer-sc-1svtpgv-6 clWA-Dk")[0];			
			a.innerHTML = "<img src=" + localStorage.getItem("avatar") + ">"
		}
		else if (window.location.href == "https://kahoot.it/ranking")
		{
			var a = document.getElementsByClassName("styles__AvatarFaceContainer-sc-1svtpgv-6 clWA-Dk")[0];			
			a.innerHTML = "<img src=" + localStorage.getItem("avatar") + ">"
		}
		else if (window.location.href == "https://kahoot.it/start")
		{
			var a = document.getElementsByClassName("styles__AvatarFaceContainer-sc-1svtpgv-6 iuezDL")[0];			
			a.innerHTML = "<img src=" + localStorage.getItem("avatar") + ">"
		}
		else if (window.location.href == "https://kahoot.it/getready")
		{
			var a = document.getElementsByClassName("styles__AvatarFaceContainer-sc-1svtpgv-6 iuezDL")[0];			
			a.innerHTML = "<img src=" + localStorage.getItem("avatar") + ">"
		}
		else if (window.location.href == "https://kahoot.it/gameblock")
		{
			var a = document.getElementsByClassName("styles__AvatarFaceContainer-sc-1svtpgv-6 iuezDL")[0];			
			a.innerHTML = "<img src=" + localStorage.getItem("avatar") + ">"
		}
	}
  //要素を取得する処理
};

function keypress_ivent(e) {
	if(e.key === 'a' || e.key === 'A'){
		if (window.location.href == "https://kahoot.it/instructions")
		{
			var b = window.prompt("アバターのURLは?")
			var a = document.getElementsByClassName("styles__AvatarFaceContainer-sc-1svtpgv-6 clWA-Dk")[0];			
			a.innerHTML = "<img src=" + b + ">"
			localStorage.setItem("avatar", b);
			console.log(localStorage.getItem("avatar"))
			alert("アバターを" + b + "にしました。");
		}
	}
}
// ページ読み込み後に実行するよう設定
window.addEventListener('keypress', keypress_ivent);
window.addEventListener("load", main, false);