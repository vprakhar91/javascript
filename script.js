(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
            
                var helloSpeaker = new Object();
                var speakWord = "Hello";
                helloSpeaker.speak = function(name) {
                    console.log(speakWord + " " + name);
                };
                window.helloSpeaker = helloSpeaker;
                localStorage(window);
                var speakWord = "Good Bye";
}
    }
    
})();   