jQuery(document).ready(function(){

	jQuery(".setgroup").mouseover(function(){
	    jQuery('.tile').removeClass('hilite');
	    var rel = jQuery(this).attr('rel');
	    jQuery('.group'+rel).addClass('hilite');
	});

	jQuery(".setgroup").mouseout(function(){
	    jQuery('.tile').removeClass('hilite');
	});

	jQuery(".tile").mouseover(function(){
	    //var d = jQuery(this).attr('data-hilite');
	    //jQuery('.group'+d).addClass('hilite');
	});
	
	jQuery(".tile").mouseout(function(){
	    //var d = jQuery(this).attr('data-hilite');
	    //jQuery('.group'+d).removeClass('hilite');
	});
	
	
	jQuery('.replay').click(function(e){
	  var animation = jQuery(this).parent().parent().find(".animation").find('img');
	  var src = animation.attr('src');
	  console.log(src+"?a="+Math.random());
	  animation.attr('src', src+"?a="+Math.random());
	  e.preventDefault();
	});
	
});



