---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary
banner: TheLetters-wide.jpg
---

<div class='row'>
  <div class='col-sm-7'><h2 style="margin-bottom:1em;">The Letters</h2></div>
  <div class='col-sm-5' style='text-align:right;padding-top:1em;'><a href="#" class="setletters traditional btn active" rel="traditional">Traditional</a> <a href="#" class="setletters modern btn" rel="modern">Modern</a></div>
</div>


<div class='row'>

  <div class='col-sm-9'>
  

	 <div id="traditional" class='gallery'>
	  {% for char in site.data.letters %}
	      {% assign groups = char.group | split: "," %} 
	      <a class="tile group {{ groups | join: " group" }}" data-hilite="" href="letters/{{char.ID}}.html">{{ char.character }}<div class='tile-title'><i>{{ char.name }}</i></div></a>
	  {% endfor %}
	</div>


	 <div id="modern" class='gallery' style='display:none;'>
	  {% for char in site.data.letters-modern %}
	      {% assign groups = char.group | split: "," %} 
	      <a class="tile group {{ groups | join: " group" }}" data-hilite="" href="letters/{{char.ID}}.html">{{ char.character }}<div class='tile-title'><i>{{ char.name }}</i></div></a>
	  {% endfor %}
	</div>
	
	<h2>Flashcards</h2>
	
	<a href="#" class="flashcards-open btn active" rel="0-legged">Group 1: 0-legged</a> <a href="#" class="flashcards-open btn active" rel="1-legged">Group 2: 1-legged</a>	<a href="#" class="flashcards-open btn active" rel="2-legged">Group 3: 2-legged</a> <a href="#" class="flashcards-open btn active" rel="3-legged">Group 4: 3:legged</a> <a href="#" class="flashcards-open btn active" rel="Punctuation">Group 5: Punctuation</a> <a href="#" class="flashcards-open btn active" rel="Letters">All</a><br />
  
  </div>
  
  <div class='col-sm-3' style='text-align:right;'>

        <h3>Groupings</h3>
	<a href="#" class="setgroup btn" rel="0-legged">0-legged</a><a class="flashcards-open" href="#" rel="0-legged"><img class='flashcard-icon' src="{{site.baseurl}}/assets/images/question-square-fill.svg"/></a><br />
	<a href="#" class="setgroup btn" rel="1-legged">1-legged</a><a class="flashcards-open" href="#" rel="1-legged"><img class='flashcard-icon' src="{{site.baseurl}}/assets/images/question-square-fill.svg"/></a><br />
	<a href="#" class="setgroup btn" rel="2-legged">2-legged</a><a class="flashcards-open" href="#" rel="2-legged"><img class='flashcard-icon' src="{{site.baseurl}}/assets/images/question-square-fill.svg"/></a><br />
	<a href="#" class="setgroup btn" rel="3-legged">3:legged</a><a class="flashcards-open" href="#" rel="3-legged"><img class='flashcard-icon' src="{{site.baseurl}}/assets/images/question-square-fill.svg"/></a><br />
	<a href="#" class="setgroup btn" rel="Punctuation">Punctuation</a><a class="flashcards-open" href="#" rel="Punctuation"><img class='flashcard-icon' src="{{site.baseurl}}/assets/images/question-square-fill.svg"/></a><br />


  </div>
  
</div>

<script>


jQuery(document).ready(function(){
  
  
	
  jQuery(".flashcards-open").click(function(e){
    var rel = jQuery(this).attr('rel');
    console.log(rel);
    current_set = rel;
    showNext();
    jQuery('#flashcards').show();
    e.preventDefault();
  }); 
  
  jQuery(".flashcards-close").click(function(e){
    jQuery('#flashcards').hide();
    e.preventDefault();
  });	
  	showNext();

});
</script>
