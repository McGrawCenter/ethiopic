---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary-narrow
banner: TheSyllables-wide.jpg
---
<style>
 #quiz {  margin:1em auto;width:600px; }
 #progress { width:100%;  }
 #progress-bar { width:0%;height:10px;background:crimson; }
 #card { text-align:center; background:black;color:white;font-size:3.4em;padding:1em; }
 #card img { height: 200px; width:auto; }
 #choices { width:100%; display:flex; flex-wrap:wrap; justify-content:center;margin-top:1em;}
 .choice { width:25%;text-decoration:none; }
 .choice-inner { margin:0.2em;padding:1em; background:#777;text-align:center; color:white; font-size:1.5em}
 a.incorrect { pointer-events: none;text-decoration:none; }
 a.incorrect > .choice-inner { background:#EEE;}
 a.correct { text-decoration:none; }
 a.correct > .choice-inner { background:#474;} 
</style>
<div class='row'>

  <div class='col-sm-12'>

      <h2 style="margin:2em 0 1.6em;">Quiz</h2>
      
      
      <div id="quiz">
      <div id="progress"><div id="progress-bar"></div></div>
     <div id="card"></div>
     <div id="choices"></div>
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
	  remainder = [...deck]; // make a copy of the deck
	  remainder.splice(current,1); // remove the correct one fmor the deck
	  remainder = shuffle(remainder); // shuffle
	  choices.push(remainder[0]); // add the first three to the possible choices
	  choices.push(remainder[1]);
	  choices.push(remainder[2]);
	  choices = shuffle(choices); // finally, shuffle
	  
	  for(var x= 0;x<=3;x++) {
	    jQuery("#choices").append("<a class='choice' href='#' rel='"+choices[x].Tags+"'><div class='choice-inner'>"+choices[x].Tags+"</div></a>");
	  }
	  current++;
	}
	
	
	
	jQuery(document).on("click",".choice",function(e){
	  var c = jQuery(this).attr('rel');
	  console.log(c, answer);
	  if(c == answer) {
	   jQuery(this).addClass("correct");
	   const myTimeout = setTimeout(function(){
	     if(current < 9) {
	       current++;
	       deal(current);
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
