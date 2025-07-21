---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary-narrow
banner: TheSyllables-wide.jpg
---
<div class='row'>

  <div class='col-sm-12'>

      <h2 style="margin:2em 0 1.6em;">The Syllabary</h2>
      
      
           
    
	{% assign current = 'h' %}
	<div class='scroll-window'>
	<div class='gallery-nowrap' style='margin-top:0px;'>
	{% for char in site.data.syllabary_revised %}
	    <a class="tile group{{ consonant }}" href="syllables/{{char.ID}}.html">{{ char.kletter }}</a>
	    {% assign current = char.consonant %}
	{% endfor %}
	</div>

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
    







