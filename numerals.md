---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary
banner: TheNumerals-wide.jpg
---

<div class='row'>

  <div class='col-sm-12'>

      <h2 style="margin-bottom:1em;">The Numerals</h2>
      
      <p>Geʽez numerals, called ኍለቍ (ḫwəlaqwə), are an alphanumeric system likely derived from Coptic uncial letters. Numerals are always bracketed by strokes placed above and below.</p>

<div class='gallery' style='margin-top:2em;'>
{% for char in site.data.numerals %}
    <a class="tile group{{ groups | join: " group" }}" data-hilite="{{ char.page }}" href="numerals/{{char.ID}}.html">{{ char.character }}<div class='tile-title'>{{ char.transliteration }}</div></a>
{% endfor %}
    <a class="flashcards-open" href="#" rel="Numerals"><img class='flashcard-icon' src="{{site.baseurl}}/assets/images/flashcards.svg"/></a>
</div>

<!--
	<h2>Flashcards</h2>
	
	<a href="#" class="setgroup flashcards-open btn active" rel="Numerals">Numerals</a>
	
-->
</div>
</div>
<script>


jQuery(document).ready(function(){
  
  
	
  jQuery(".flashcards-open").click(function(e){
    var rel = jQuery(this).attr('rel');
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
