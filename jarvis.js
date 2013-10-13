/**	Jarvis
 *	version : 1.0.0
 *	author  : Raven Lagrimas | rjlagrimas08@gmail.com
 *	license : MIT
 *	http://ravenjohn.github.io/jarvis
 */
(function(root){

	"use strict";

	var j = root.webkitSpeechRecognition ||
			root.mozSpeechRecognition ||
			root.msSpeechRecognition ||
			root.oSpeechRecognition ||
			root.SpeechRecognition;
	
	if(!j){
		throw new Error("Speech Recognition is not supported.");
	}
	
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ");
	};
	
	var upgrade = {
		name : "Jarvis",
		cmds : [],
		lang : "en-US",
		debug : !0,
		reqname : !0,
		continuous : !0,
		maxAlternatives : 5,
		learn : function(cmds){
			cmds&&(this.cmds=cmds);
			this.onresult = function(r){
				for(var i=0, n=r.results[r.resultIndex], k=n.length; i < k; i+=1){
					var g = n[i].transcript.trim();
					this.onrecognize&&this.onrecognize(g);
					if(this.debug){
						console.log('recognized : ' + g);
					}
					for(var l=0, m=this.cmds.length; l < m; l+=1){
						// todo : check if name is called, check if name is reqd
						if(g == this.cmds[l][0].trim()){
							this.cmds[l][1].call();
							if(this.debug){
								console.log('match found');
							}
							break;
						}
					}
					if(l!=m) break;
					this.onnomatch&&this.onnomatch(j[i]);
					if(this.debug){
						console.log('match not found');
					}
				}
			};
		},
		onerror : function(e){
			if(e.error == "network"){
				throw new Error("Jarvis needs the Internet");
			}
			if(e.error == "not-allowed"){
				throw new Error("Jarvis was denied. X(");
			}
			throw new Error("Unknown error : " + e.error);
		},
		onend : function(){
			this.continuous&&this.start();
		},
		setLanguage : function(l){
			this.lang = l;
		},
		addCommand : function(c){
			this.cmds.push(c);
		},
		setName : function(n){
			this.name = n;
		},
		setVoiceKey : function(k){
			this.voicerssKey = k;
		},
		speak : function(t){
			if(!this.voicerssKey){
				throw new Error("Voice Rss Key is missing. You can get it from http://www.voicerss.org/");
			}
			
			var spkr = document.getElementById("_jarvis");
			
			if(!spkr){
				var audio = document.createElement('audio');
				audio.setAttribute('id', '_jarvis');
				audio.setAttribute('autoplay', 'autoplay');
				document.body.appendChild(audio);
				spkr = document.getElementById("_jarvis");
			}
			
			var link = 'http://api.voicerss.org/?key='+this.voicerssKey+'&language='+this.lang+'&src='+t;
			document.getElementById("_jarvis").src = link + "&rnd=" + Math.random();
		}
	};

	//expose this object to the world
	root.jarvis = new j();

	//upgrade jarvis
	for(var i in upgrade)
		root.jarvis[i] = upgrade[i];
		
})(this);
