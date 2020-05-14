
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  
      if ( names[i].charAt(0) == "J") {

          byeSpeaker.name = names[i];
          byeSpeaker.speak();
      
      } 
      else {

         helloSpeaker.name = names[i];
         helloSpeaker.speak();
        
    }

  }









