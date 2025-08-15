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
 #card { text-align:center; background:black;color:white;font-size:150px;padding:0.5em; }
 #choices { width:100%; display:flex; flex-wrap:wrap; justify-content:center;margin-top:1em;}
 #counter { position:absolute; top:5px;right:0px; color:white;padding:10px; }
 .choice { width:25%;text-decoration:none; }
 .choice-inner { margin:0.2em;padding:1em; background:#777;text-align:center; color:white; font-size:1.5em; font-style:italic;}
 a.incorrect { pointer-events: none;text-decoration:none; }
 a.incorrect > .choice-inner { background:#EEE;}
 a.correct { text-decoration:none; }
 a.correct > .choice-inner { background:#474;} 
</style>
<div class='row'>
  <div class='col-sm-12'>

      <h2 style="margin:2em 0 1.6em;">Character Quiz</h2>
  </div> <!-- /.col -->
</div>
<div class='row'>

  <div class='col-sm-3'>
      
      <a href="quiz.html" class="btn active">Character Quiz</a><br />
      <a href="vocabularyquiz.html" class="btn active">Vocabulary Quiz</a><br />
      <a href="transcriptionquiz.html" class="btn active">Transcription Quiz</a><br />

  </div> <!-- /.col -->
  <div class='col-sm-9'>
      
      
      <div id="quiz">
         <div id="progress"><div id="progress-bar"></div></div>
         <div id="card"></div>
         <div id="choices"></div>
         <div id="counter"><span id="current">1</span> of 10</div>
      </div>

  </div> <!-- /.col -->

</div>

<script>




  var sy = {{ site.data.syllabary | jsonify }}

jQuery(document).ready(function(){
  
	var deck = shuffle(sy).slice(0,10);
	var remainder = [];
	var current = 0;
	var answer = 0;
	var choices = [];
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
	  
	  jQuery('#card').text(deck[current].character);  // show the character
	  jQuery('#choices').empty();
	  choices = [];
	  choices.push(deck[current]);  // add character to the final choices
	  answer = deck[current].ID; // save the answer
	  remainder = [...deck]; // make a copy of the deck
	  remainder.splice(current,1); // remove the correct one fmor the deck
	  remainder = shuffle(remainder); // shuffle
	  choices.push(remainder[0]); // add the first three to the possible choices
	  choices.push(remainder[1]);
	  choices.push(remainder[2]);
	  choices = shuffle(choices); // finally, shuffle
	  
	  jQuery("#current").text(current+1);
	  
	  for(var x= 0;x<=3;x++) {
	    jQuery("#choices").append("<a class='choice' href='#' rel='"+choices[x].ID+"'><div class='choice-inner'>"+choices[x].transliteration+"</div></a>");
	  }
	  current++;
	}
	
	
	
	jQuery(document).on("click",".choice",function(e){
	  var c = parseInt(jQuery(this).attr('rel'));
	  if(c == answer) {
	   jQuery(this).addClass("correct");
	   const myTimeout = setTimeout(function(){
	     if(current < 9) {
	       current++;
	       deal(current);
	       console.log(current);
	       jQuery("#progress-bar").css('width',((current/10)*100)+"%");
	     }
	     else {
	       jQuery("#progress-bar").css('width',"100%");
	       alert('Refresh the page to try again.');
	     }
	   }, 2000);
	  }
	  else { jQuery(this).addClass("incorrect"); }
	  
	  
	});

  

});
</script>
    
