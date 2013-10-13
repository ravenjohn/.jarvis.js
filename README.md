.jarvis.js
==========

.jarvis.js or Point Jarvis is a simple JavaScript library for speech recognition and text-to-speech using www.voicerss.org's API. Inspired from Tal Ater's annyang.js and Iron Man.


Why is the name Point Jarvis?
---
Because this is just a part of Jarvis. Much like a part of 1: .1 .2 .3 .12312. There you go.


Usage
-----
````html
<script src="jarvis.js"></script>
<script>
	//set your voice key, you can get it from www.voicerss.org
	jarvis.setVoiceKey('814690c9d02c4c15be28146ee9f6ac27');
	
	//set things to learn, array of arrays
	jarvis.learn([
		["show me :name", function(name){
			console.log('name');
			jarvis.speak('clear ' + name);
		}],
		["hello :name", function(name){
			jarvis.speak("Hello "+name+". This is Jarvis.");
		}],
	]);
	
	//wake up jarvis
	jarvis.start();
</script>
````

**For more details, send me a message [rjlagrimas08@gmail.com](mailto:rjlagrimas08@gmail.com)

Author
------
Raven Lagrimas | rjlagrimas08@gmail.com


License
-------
Licensed under [MIT](https://github.com/ravenjohn/.jarvis.js/blob/master/LICENSE)
