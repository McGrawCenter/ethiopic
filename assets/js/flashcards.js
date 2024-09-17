

var deck = jQuery('.deck');
var tools = jQuery('.tools');
var reverse = false;
var delay = 800;


  function shuffle(array) {
     for (var i = array.length - 1; i > 0; i--) { 
         var j = Math.floor(Math.random() * (i + 1));           
         var temp = array[i];
         array[i] = array[j];
         array[j] = temp;
     }  
     return array;
  }
  
  function ramdomizeOptions(answerobj) {
    var x = shuffle(cards[current_set]);
    x =x.slice(0, 3);
    x[0] = answerobj;
    x = shuffle(x);
    return x;
  }
  
  function checkit() {
     var correct = this.getAttribute("data-correct");
     if(correct == "true") { 
      this.classList.add("correct");
      const myTimeout = setTimeout(function(){
         cards[current_set].push(cards[current_set].splice(0, 1)[0]);
         showNext(); 
      }, delay);
    
      }
     else { this.classList.add("incorrect"); }

  }
  

  function showNext() {
  
    console.log(current_set);
    jQuery(".deck").html(cards[current_set][0].f);
    
    jQuery("#flashcards-title").text(current_set);
    
    var answer = cards[current_set][0];
    var options = ramdomizeOptions(answer);
    jQuery(".tools").empty();
    for (const element of options) {
        var x = document.createElement("button");
        if(reverse == false) { x.innerHTML = element.b; }
        else { x.innerHTML = element.f; }
        
        x.addEventListener('click', checkit, false);
        if(answer.f == element.f) { x.setAttribute("data-correct","true") }
        jQuery('.tools').append(x);
    }    
  }



