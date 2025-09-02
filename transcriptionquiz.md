---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary-narrow
banner: TheSyllables-wide.jpg
---
<style>
 #quiz {  max-width:700px; width:100%;position:relative; }
 #progress { width:100%;  }
 #progress-bar { width:0%;height:10px;background:crimson; }
 #card { text-align:center; background:black;color:white;font-size:3.4em;padding:1em; }
 #card img { height: 200px; width:auto; }
 #choices { width:100%; display:flex; flex-wrap:wrap; justify-content:center;margin-top:1em;}
 #counter { position:absolute; top:10px;right:5px; color:white;padding:10px; }
 .choice { width:25%;text-decoration:none; }
 .choice-inner { margin:0.2em;padding:1em; background:#777;text-align:center; color:white; font-size:1.5em}
 a.incorrect { pointer-events: none;text-decoration:none; }
 a.incorrect > .choice-inner { background:#EEE;}
 a.correct { text-decoration:none; }
 a.correct > .choice-inner { background:#474;}
 #incorrect { color:red; font-weight:bold; }
 #check { background: #444;color: white;width: 100%;border: solid 0px black;padding: 0.5em; }
</style>
<div class='row'>
  <div class='col-sm-12'>
      <h2 style="margin:2em 0 1.6em;">Transcription Quiz</h2>
  </div> <!-- /.col -->
</div>
<div class='row'>

  <div class='col-sm-3'>

      <div id="quiz">
         <a href="quiz.html" class="btn active">Character Quiz</a><br />
         <a href="vocabularyquiz.html" class="btn active">Vocabulary Quiz</a><br />
         <a href="transcriptionquiz.html" class="btn active">Transcription Quiz</a><br />
         <div id="counter"><span id="current">1</span> of 10</div>
      </div>
      
      


  </div> <!-- /.col -->

  <div class='col-sm-9'>
     
      
      <div id="quiz">
        <div id="progress"><div id="progress-bar"></div></div>
        <div id="card"></div>
        <button id="check">Check</button>
        <ethiopic-keyboard></ethiopic-keyboard>
        <div id="counter">
           <span id="current">1</span> of 10
           <div id="incorrect">0</div>
        </div>        
      </div>

  </div> <!-- /.col -->



</div>

<script>

var sy = {{ site.data.examples | jsonify }}

jQuery(document).ready(function(){
  
var deck = shuffle(sy).slice(0,10);
var remainder = [];
var current = 0;
var answer = 0;
var choices = [];
var incorrect = 0;

deal(0);
  
	function shuffle(array) {
	  let currentIndex = array.length;

	  // While there remain elements to shuffle...
	  while (currentIndex != 0) {

	    // Pick a remaining element...
	    let randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex--;

	    // And swap it with the current element.
	    [array[currentIndex], array[randomIndex]] = [
	      array[randomIndex], array[currentIndex]];
	  }
	  return array;
	}
	
	function deal(current) {
	  
	  jQuery('#card').html("<img src='"+ deck[current].Image +"'/>");  // show the character
	  jQuery('#choices').empty();
	  choices = [];
	  choices.push(deck[current]);  // add character to the final choices
	  answer = deck[current].Tags; // save the answer

	  current++;
	  jQuery(kbd).val("");
	}
	
	
	
	var shadowel = jQuery("ethiopic-keyboard").get(0),shadowRoot;
	var kbd = shadowel.shadowRoot.children[1].childNodes[1];
	
	jQuery("#check").click(function(e){
	  if(kbd.value == answer) { 
	  //if(1 == 1) {
	     if(current < 9) {
	       current++;
	       jQuery("#current").text(current);
	       var c = setTimeout(function(){
	         deal(current);
	       }, 2000);
	       
	       jQuery("#progress-bar").css('width',((current/10)*100)+"%");
	     }
	     else {
	       jQuery("#progress-bar").css('width',"100%");
	       alert('Refresh the page to try again.');
	     }

	  }
	  else {
	    incorrect++;
	    jQuery("#incorrect").text(incorrect);
	    jQuery(kbd).val("");
	  }
	  e.preventDefault();
	});
	
/*
	jQuery(document).on("keyup",kbd,function(e){

	  
	});
*/
  

});
</script>
<script src="assets/js/EthiopicKeyboard.js?v=0.0.2"></script>

