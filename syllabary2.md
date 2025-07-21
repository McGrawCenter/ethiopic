---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary-narrow
banner: TheSyllables-wide.jpg
---

<style>
#syllabary thead th { text-align:center;font-size:1.3em;padding-bottom:1em;}
#syllabary tbody th { text-align:center;font-size:1.3em;}
#syllabary td { 
   text-align:center;
   height:4em;
   min-width:108px;
 }
.newtile { 
   padding:1em;
   font-size:1.8em;
   background:white;
   border:solid 1px #c8c3ad;
   display:block;
   text-decoration:none;
   margin:2px;
   min-width:108px;
 }
.newtile:hover { background:#EEE; text-decoration:none;color:black; }
</style>
<div class='row'>

  <div class='col-sm-12'>

      <h2 style="margin:2em 0 1.6em;">The Syllabary</h2>
      
      
         <div class='scroll-window'>  
    
	{% assign current = 'h' %}
	<table id="syllabary" style="table-layout:fixed;">
	  <thead>
	  <tr>
	    <th></th>
	    <th>a</th>
	    <th>u</th>
	    <th>i</th>
	    <th>ā</th>
	    <th>e</th>
	    <th>ə </th>
	    <th>o</th>
	    <th><sup>w</sup>ā</th>
	    <th><sup>y</sup>a</th>
	  </tr>
	  </thead>
	  <tbody>
	  <tr>
	    <th>{{current}}</th>
	{% for char in site.data.syllabary_revised %}
	   {% if current != char.consonant %}
	     </tr><tr><th>{{current}}</th>{% assign current = char.consonant %}
	   {% endif %}
	   {% if char.letter == null %}
	   <td>&nbsp;</td>
	   {% else %}
	   <td><a class="newtile group{{ consonant }}" title="{{ char.consonant }}{{ char.vowel }}" alt="{{ char.consonant }}{{ char.vowel }}" href="syllables/{{char.ID}}.html">{{ char.letter }}</a></td>
	   {% endif %}
	    
	    
	{% endfor %}
	  </tr>
	 </tbody>
	</table>
	
	</div> <!-- /.scroll-window -->

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
    







