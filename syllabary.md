---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary-narrow
banner: TheSyllables-wide.jpg
---
<div class='row'>

  <div class='col-sm-12'>

      <h2 style="margin-bottom:1em;">The Syllabary</h2>
	      

	{% assign group = 'Variants of hoy' %}
        <div><a href="#" class="setgroup flashcards-open btn active" rel="Variants of hoy">Variants of hoy</a></div>
	<div class='gallery' style='margin-top:0px;'>
	{% for char in site.data.syllabary %}
	    {% if char.group != group %}</div><div><a href="#" class="setgroup flashcards-open btn active" rel="Variants of hoy">{{char.group}}</a></div><div class='gallery' style='margin-top:0px;'>{% endif %}
	    <a class="tile group{{ groups | join: " group" }}" data-hilite="{{ char.page }}" href="syllables/{{char.ID}}.html">{{ char.character }}<div class='tile-title'>{{ char.transliteration }}</div></a>
	    
	    {% assign group = char.group %}
	{% endfor %}
	</div>


  </div> <!-- /.col -->



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
    







