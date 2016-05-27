app.controller('headerController', function($scope) {

  $scope.generateHeaders = function() {
    var headers = [
      "Did you know? America's finest character actors, John Carroll Lynch and Stephen Tobolowsky, know the Wu Tang Secret!",
      "You are sending this search term directly to Ryan Reynolds! Who knew he was so fast at finding movie info?! We pay him in Chiclets. He's fine.",
      "I'll get you your movie info right after I talk to my agent. He's rolling calls and thinks my 'The Shining, but with Bobcat Goldthwait' pitch is HOT.",
      "Fun fact: the code for this site is actually cobbled together from random words we pick out of spec scripts we find in the dumpster!",
      "Meryl Streep is actually a bunch of Oscar statues standing on each other's shoulders in a trenchcoat. Shhhhh.",
      "You're not fooling us, DiCaprio. We KNOW you coated that bison liver in Lawry's and Worcester sauce. Fraud.",
      "IT'S 2016 AND PEOPLE ARE LOSING THEIR MIND OVER THE GENDER OF FICTIONAL GHOST EXTERMINATORS. THINK ABOUT THAT.",
      "It's incredible to think that Star Wars: The Force Awakens was made entirely in jQuery and CSS. What a world, huh?",
      "'I'M SO EXCITED FOR THE NEW SPIDERMAN MOVIE!!!!' - dweebs",
      "Yes, Kanye. We see you. Please stop.",
      "Science recently found out that every movie would be 57% more enjoyable if Smashmouth's 'All-Star' played during the credits.",
      "That scent in the air on Hollywood Blvd? Don't ask.",
      "Unless the next Jurassic Park has snowboarding dinosaurs DON'T EVEN TALK TO ME."
    ];
    $scope.header = headers[Math.floor(Math.random()*headers.length)];
  }

  $scope.generateHeaders();
})
