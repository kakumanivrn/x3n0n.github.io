function decodeb64() {
	var input = document.getElementById('string');
	var text = input.value;
	input.value = atob(text);
}

function decodeurl() {
	var input = document.getElementById('string');
	var text = input.value;
	input.value = decodeURIComponent(text);
}

function encodeb64() {
	var input = document.getElementById('string');
	var text = input.value;
	input.value = btoa(text);
}

function encodeurl() {
	var input = document.getElementById('string');
	var text = input.value;
	input.value = encodeURIComponent(text);
}

function decodejwt() {
	var input = document.getElementById('string');
	var text = input.value;
	var array_txt = text.split('.');
	console.log(array_txt);
	var final_txt = atob(array_txt[0]) + "\n\n" + atob(array_txt[1]) + "\n\n" + array_txt[2];
	input.value = final_txt;
}

function prettyjson() {
	var input = document.getElementById('string');
	var obj = JSON.parse(input.value);
	input.value = JSON.stringify(obj, null, 2);
}

function browsejson() {
	var input = document.getElementById('string');
	var json = input.value;
	json = json.trim();
	window.open("json/json.html?json=" + encodeURIComponent(json), "_blank");
}