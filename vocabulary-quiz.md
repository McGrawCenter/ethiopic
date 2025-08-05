---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary-narrow
banner: TheSyllables-wide.jpg
---
<style>
 #quiz {  margin:1em auto;width:100%;max-width:800px; }
 #progress { width:100%;  }
 #progress-bar { width:0%;height:10px;background:crimson; }
 #card { text-align:center; background:black;color:white;font-size:3.4em;padding:2em 1em; }
 #card img { height: 200px; width:auto; }
 #nav { text-align:right; }
 #choices { width:100%; display:flex; flex-wrap:wrap; justify-content:center;margin-top:1em;}
 .choice { width:25%;text-decoration:none; }
 .choice-inner { margin:0.2em;padding:1em; background:#777;text-align:center; color:white; font-size:1em}
 a.incorrect { pointer-events: none;text-decoration:none; }
 a.incorrect > .choice-inner { background:#EEE;}
 a.correct { text-decoration:none; }
 a.correct > .choice-inner { background:#474;} 
</style>
<div class='row'>

  <div class='col-sm-12'>

      <h2 style="margin:2em 0 1.6em;">Vocabulary Quiz</h2>
      
      
      <div id="quiz">
      <div id="nav">Mode: <a href='#' class='mode btn btn-primary' rel='ethiopic'>Ethiopic</a><a href='#' class='mode btn' rel='english'>English</a></div>
      <div id="progress"><div id="progress-bar"></div></div>
     <div id="card"></div>
     <div id="choices"></div>
      </div>

  </div> <!-- /.col -->



</div>

<script>

var sy = {{ site.data.nouns | jsonify }}

jQuery(document).ready(function(){
  
var deck = shuffle(sy).slice(0,10);
var remainder = [];
var current = 0;
var answer = 0;
var choices = [];
var mode = 'ethiopic';

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
	  if(mode == 'ethiopic') {
	     jQuery('#card').html(deck[current].Ethiopic);  // show the ethiopic word
	  }
	  else {
	     jQuery('#card').html(deck[current].English);  // show the english word
	  }
	  jQuery('#choices').empty();
	  choices = [];
	  choices.push(deck[current]);  // add character to the final choices
	  if(mode == 'ethiopic') {
	     answer = deck[current].English; // save the answer
	  }
	  else {
	     answer = deck[current].Ethiopic; // save the answer
	  }
	  
	  remainder = [...deck]; // make a copy of the deck
	  remainder.splice(current,1); // remove the correct one fmor the deck
	  remainder = shuffle(remainder); // shuffle
	  choices.push(remainder[0]); // add the first three to the possible choices
	  choices.push(remainder[1]);
	  choices.push(remainder[2]);
	  choices = shuffle(choices); // finally, shuffle
	  if(mode == 'ethiopic') {
	  
	     for(var x= 0;x<=3;x++) {
	       jQuery("#choices").append("<a class='choice' href='#' rel='"+choices[x].English+"'><div class='choice-inner'>"+choices[x].English+"</div></a>");
	     }
	     current++;
	  }
	  else {
	     for(var x= 0;x<=3;x++) {
	       jQuery("#choices").append("<a class='choice' href='#' rel='"+choices[x].Ethiopic+"'><div class='choice-inner'>"+choices[x].Ethiopic+"</div></a>");
	     }
	     current++;
	  }
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


	jQuery(document).on("click",".mode",function(e){
	  mode = jQuery(this).attr('rel');
	  jQuery(".mode").removeClass('btn-primary');
	  jQuery(this).addClass('btn-primary');
	  deal(0);
	  
	});
  

});
</script>
