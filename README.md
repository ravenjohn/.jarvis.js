.jarvis.js
==========

.jarvis.js or Point Jarvis is a simple JavaScript library for speech recognition and text-to-speech using www.voicerss.org's API. Inspired from Tal Ater's annyang.js and Iron Man. View [demo](http://ravenjohn.github.io/.jarvis.js)

Why is the name Point Jarvis?
---
Because this is just a part of Jarvis. Much like a part of 1: .1 .2 .3 .12312. There you go.


Usage
-----
````html
<!-- [CDN hosted at jsdelivr.net](http://cdn.jsdelivr.net/jarvis.js/1.0.0/jarvis.min.js) -->
<script src="jarvis.min.js"></script>
<script>
	//set your voice key, you can get it from www.voicerss.org
	jarvis.setVoiceKey('814690c9d02c4c15be28146ee9f6ac27');
	
	//set things to learn, array of arrays
	jarvis.learn([
		// 1st parameter is the command (string/regex)
		// 2nd parameter is the function to execute
		["show me :name", function(name){
			console.log('name');
			jarvis.speak('clear ' + name);
		}]
	]);
	
	//set name, if you don't want the name jarvis
	jarvis.setName('Raven');
	
	// if you want to require the name for every command
	// e.g. command "show me" will only match to "Jarvis show me"
	// defaults to false
	jarvis.reqname(true);
	
	// onrecognize will give you the recognized speech
	jarvis.onrecognize = function(text){
		// do what you want ...
	};
	
	// onnomatch will be triggered if the text didn't match any of commands
	jarvis.onnomatch = function(text){
		// do what you want ...
	};
	
	// debug if you want to debug things
	// defaults to false
	jarvis.debug = true;
	
	// speak commands jarvis to say things
	// has a limit of 100 characters
	jarvis.speak = true;
	
	//wake up jarvis
	jarvis.start();
	
	//put jarvis to sleep
	jarvis.stop();
</script>
````

Author
------
Raven Lagrimas

To Do
------
1. Documentation the code.
2. Minify.
3. Bower support.
4. Demo page.
5. Improve TTS and STT.
6. Be popular.
7. Stay Awesome. :white_check_mark:

License
-------
Licensed under [MIT](https://github.com/ravenjohn/.jarvis.js/blob/master/LICENSE)
