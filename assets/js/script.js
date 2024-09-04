jQuery(document).ready(function(){

	jQuery(".setgroup").mouseover(function(){
	    jQuery('.tile').removeClass('hilite');
	    var rel = jQuery(this).attr('rel');
	    console.log(rel);
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
	  animation.attr('src', src+"?a="+Math.random());
	  e.preventDefault();
	});
	
	jQuery(".set_hand").click(function(e){
	  var animation = jQuery(this).parent().parent().find(".animation").find('img');
	  var dir = jQuery(this).attr('rel');
	  var file = jQuery(this).attr('data-id');
	  animation.attr('src', "../assets/images/animations/"+dir+"/"+file+".gif?a="+Math.random());
	  if(jQuery(".script").hasClass('active')) {
	    jQuery(".script").removeClass('active');
	    jQuery(".cursive").addClass('active');
	  }
	  else {
	    jQuery(".script").addClass('active');
	    jQuery(".cursive").removeClass('active');
	  }
	  e.preventDefault();	 	  
	});
	
	jQuery(".setletters").click(function(e) {
	  var rel = jQuery(this).attr('rel');
	  if(rel == 'modern') {
	    jQuery("#traditional").hide();
	    jQuery("#modern").show();
	    jQuery(".traditional").removeClass('active');
	    jQuery(".modern").addClass('active');
	  }
	  else {
	    jQuery("#traditional").show();
	    jQuery("#modern").hide();
	    jQuery(".modern").removeClass('active');
	    jQuery(".traditional").addClass('active');	    
	  }
	  e.preventDefault();	 	  
	});		
	
});



