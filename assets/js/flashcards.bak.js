  
  var deck = {}
  deck.cards = []
  var answerArray = [];
  var reverse = false;
  var delay = 700;
  
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
    var x = shuffle(deck.cards);
    x =x.slice(0, 3);
    x[0] = answerobj;
    x = shuffle(x);
    return x;
  }
  
  
  function show() {
    if(reverse == false) { deck.front.innerHTML = deck.cards[0].f; }
    else { deck.front.innerHTML = deck.cards[0].b; }
    
    var answer = deck.cards[0];
    var options = ramdomizeOptions(answer);
    deck.tools.innerHTML = "";

    for (const element of options) {
        var x = document.createElement("button");
        if(reverse == false) { x.innerHTML = element.b; }
        else { x.innerHTML = element.f; }
        
        x.addEventListener('click', checkit, false);
        if(answer.f == element.f) { x.setAttribute("data-correct","true") }
        deck.tools.appendChild(x);
    }    
  }
  
  
   
  
  
  function checkit() {
     var correct = this.getAttribute("data-correct");
     if(correct == "true") { 
      this.classList.add("correct");
      const myTimeout = setTimeout(function(){
         deck.cards.splice(0, 1);
         show(); 
      }, delay);
    
      }
     else { this.classList.add("incorrect"); }

  }
  
  
  var flashcards = function(divID, config){
    deck.cards = shuffle(config.cards);
    // build UI
    deck.frame = document.getElementById(divID);
    deck.top = document.createElement("div");
    deck.deck = document.createElement("div");
    deck.tools = document.createElement("div");
    
    deck.front = document.createElement("div");
    deck.back = document.createElement("div");
    
    var close_button = document.createElement("a");
    
    deck.top.classList.add("top");
    deck.deck.classList.add("deck");
    deck.front.classList.add("front");
    deck.back.classList.add("back");
    deck.tools.classList.add("tools");
    
    deck.frame.appendChild(deck.top);
    deck.frame.appendChild(deck.deck); 
    deck.frame.appendChild(deck.tools); 
    
    deck.deck.appendChild(deck.front);
    deck.deck.appendChild(deck.back); 
    
    deck.frame.style.display = 'flex';
    deck.frame.style.flexDirection = 'column';
    deck.deck.style.height = '80%';
    deck.tools.style.height = '20%';
    deck.front.style.background = '#FFF';
    deck.back.style.background = '#EFEFEF';   
    deck.back.style.display = 'none'; 
    
    show();
  }
 
  
