---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<div class='row' style='margin-top:2em;'>


    <div class='col-sm-12'>
    
  
      <h2>The Consonants</h2>
      <p>Explanation of the consonant forms of the alphabet. Proin ipsum sapien, luctus quis ex eu, ornare viverra quam. Nunc commodo neque vitae sollicitudin sollicitudin. Etiam suscipit, felis eget condimentum dapibus, nunc est lacinia neque, a lobortis leo nibh sit amet urna. Vivamus elementum, odio sed scelerisque finibus, leo turpis pellentesque enim, ac tempor nisi arcu a neque. Fusce varius consectetur libero, vitae vehicula turpis elementum consectetur. Quisque vitae leo aliquet, varius dui sit amet, rhoncus leo. Sed purus urna, ultrices suscipit.</p>
      
 <div class='gallery'>
  {% for char in site.data.consonants %}
      {% assign groups = char.group | split: "," %}
      
      <a class="tile group {{ groups | join: " group" }}" data-hilite="" href="consonants/{{char.ID}}.html">{{ char.character }}<div class='tile-title'><i>{{ char.name }}</i></div></a>
  {% endfor %}
</div>

</div>

    
<div class='in-page-menu'>
  <ul>
	<li><a href="samplegroup.html" class="setgroup" rel="Sitting">Group 1: Sitting</a></li>
	<li><a href="samplegroup.html" class="setgroup" rel="1-legged">Group 2: 1-legged</a></li>
	<li><a href="samplegroup.html" class="setgroup" rel="2-legged">Group 3: 2-legged</a></li>
	<li><a href="samplegroup.html" class="setgroup" rel="3-legged">Group 4: 3:legged</a></li>
  </ul>

</div>
    
    
      <h2>The Syllables</h2>
      
      <p>Explanation of the syllable forms of the alphabet. Quisque vitae leo aliquet, varius dui sit amet, rhoncus leo. Sed purus urna, ultrices suscipit interdum vitae, dictum nec neque. Sed diam felis, hendrerit at elit vulputate, vestibulum ornare sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis leo id erat pretium fermentum et quis lacus. Proin convallis est ac neque dictum, nec pellentesque nisl auctor.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris pharetra iaculis orci vel fringilla. Mauris sed dui fermentum, varius elit id, vehicula libero. Fusce eros mi, tempus nec nunc eu, venenatis convallis augue. Suspendisse vel suscipit libero. Phasellus ornare sem id nisi viverra vulputate. Integer ac risus consequat metus mattis vulputate a non lorem. Aenean id tellus nec sapien imperdiet ultrices. Vestibulum nec odio vel nisi mollis feugiat. Ut mollis est non diam lacinia dignissim. Vestibulum id turpis vitae eros scelerisque faucibus. </p>

{% assign group = '1' %}
<div class='gallery'>
{% for char in site.data.syllables %}
    {% if char.group != group %}</div><div class='gallery'>{% endif %}
    <a class="tile group{{ groups | join: " group" }}" data-hilite="{{ char.page }}" href="syllables/{{char.ID}}.html">{{ char.character }}<div class='tile-title'>{{ char.transliteration }}</div></a>
    
    {% assign group = char.group %}
{% endfor %}
</div>











      <h2>The Numerals</h2>
      
      <p>Explanation of the numeral forms...  </p>

<div class="gallery">
  {% for char in site.data.numerals %}
      <a class="tile group" data-hilite="#" href="n{{char.ID}}.html">{{ char.character }}<div class='tile-title'>{{ char.transliteration }}</div></a>
  {% endfor %}

</div> <!-- /.collection-group -->



      <h2>Punctuation</h2>
      
      <p>Explanation of puncuation...  </p>

<div class="gallery">


  {% for char in site.data.punctuation %}
      <a class="tile group" data-hilite="#" href="p{{char.ID}}.html">{{ char.character }}<div class='tile-title'>{{ char.transliteration }}</div></a>
  {% endfor %}
  
</div> <!-- /.gallery -->

</div> <!-- /.column -->

<script>

var data = {{ site.data.alphabet4 | jsonify }};

jQuery(document).ready(function(){

/*
	function tileTemplate(o){
	return "<a class='tile' href='"+o.page+".html'>"+o.front+"<div class='tile-title'>"+o.back+"</div></a>";
	}



	function doFilter(tag) {
	  jQuery('.gallery').empty();
	  jQuery.each(data, function(i,v){
	    var tags = v.group.split(",");
	    if(tags.indexOf(tag) >= 0) {
	      jQuery(".gallery").append(tileTemplate(v));
	    }
	  });
	}
	
	
	function doShowAll() {
	  jQuery('.gallery').empty();
	  var html = "";
	  jQuery.each(data, function(i,v){
	      if(v.column == '1') { html += "<div class='collection'>"; }
	      html += tileTemplate(v);
	      if(v.column == '7') { html += "</div>"; }
	  });
	  jQuery(".gallery").append(html);
	}	
  
  	jQuery(".filterGallery").click(function(e){
  	  var tag = jQuery(this).attr('rel');
  	  if(tag == 'all') {
  	    doShowAll();
  	  }
  	  else {
  	    doFilter(tag);
  	  }
  	  e.preventDefault();
  	});
  
	doFilter('1');
*/
});
</script>
