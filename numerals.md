---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary
banner: TheNumerals-wide.jpg
---

<div class='row'>

  <div class='col-sm-12'>

      <h2 style="margin-bottom:1em;">The Numerals</h2>
      
      <p>Explanation of the syllable forms of the alphabet. Quisque vitae leo aliquet, varius dui sit amet, rhoncus leo. Sed purus urna, ultrices suscipit interdum vitae, dictum nec neque. Sed diam felis, hendrerit at elit vulputate, vestibulum ornare sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis leo id erat pretium fermentum et quis lacus. Proin convallis est ac neque dictum, nec pellentesque nisl auctor.</p>

<div class='gallery'>
{% for char in site.data.numerals %}
    <a class="tile group{{ groups | join: " group" }}" data-hilite="{{ char.page }}" href="#">{{ char.character }}<div class='tile-title'>{{ char.transliteration }}</div></a>
{% endfor %}
</div>


	<h2>Flashcards</h2>
	
	<a href="#" class="setgroup flashcards-open btn active" rel="Numerals">Numerals</a>
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
