// let rankings =
// {
//     1: [charles_minor, ],
//     2: []
// }



// TV character rankings by number (1-10, where 10 is 0)
let rankings = {
    1: ["charles_minor.jpg", "amy_santiago.jpg", "terry_crews.jpg", "monica.jpg", "ross.jpg", "claire_dunphy.jpg", "nathan_shelley.jpg", "lucas_sinclair.jpg", "luther_umbrella.jpg", "jay_pritchett.jpg"],
    2: ["pam_beesley.jpg", "jim_halpert.jpg", "rachel.jpg", "leonard_hofstadter.jpg", "phyllis.jpg", "angela.jpg", "tom_haverford.jpg", "manny_delgado.jpg", "chris_traeger.jpg", "mitchell_modern_family.jpg"],
    3: ["nellie.jpg", "mark_brandanawitz.jpg", "ben_umbrella.jpg", "raj.jpg", "hailey.jpg", "andy_bernard.jpg", "mike.jpg", "gloria.jpg", "erin_hannon.jpg", "janice_friends.jpg"],
    4: ["cece.jpg", "stanley.jpg", "penny.jpg", "elaine_bennis.jpg", "kelly.jpg", "ryan.jpg", "coach.jpg", "joey.jpg", "allison_umbrella.jpg", "aly_new_girl.jpg"],
    5: ["jess.jpg", "rosa_diaz.jpg", "ben_wyatt.jpg", "coach_new_girl.jpg", "ted_lasso_soccer_player.jpg", "george_costanza.jpg", "donna.jpg", "captain_holt.jpg", "nancy.jpg", "robby_new_girl.jpg"],
    6: ["toby.jpg", "luke_modern_family_son.jpg", "jerry.jpg", "ted_lasso_soccer_player2.jpg", "jan_levinson.jpg", "coach_beard.jpg", "jean_ralphio.jpg", "schmidt.jpg", "viktor_umbrella.jpg", "diego_umbrella.jpg"],
    7: ["sheldon.jpg", "amy_farrah_fowler.jpg", "the_boss_lady_ted_lasso.jpg", "chandler.jpg", "cameron_modern_family.jpg", "phoebe.jpg", "winston.jpg", "meredith.jpg", "joyce.jpg", "will_byers.jpg"],
    8: ["nick.jpg", "jake_peralta.jpg", "newman.jpg", "howard.jpg", "kramer.jpg", "danny_ted_lasso.jpg", "steve_harrington.jpg", "phil.jpg", "kevin_malone.jpg", "number_5.jpg"],
    9: ["michael_scott.jpg", "madmax.jpg", "charles_boyle.jpg", "leslie_knope.jpg", "ted_lasso.jpg", "outside_dave.jpg", "mose.jpg", "ron.jpg", "jim_hopper.jpg", "dustin_henderson.jpg"],
    0: ["dwight.jpg", "andy_dwyer.jpg", "jerry_gergich.jpg", "hitchcock_and_scully.jpg", "klaus_umbrella.jpg", "elle.jpg", "april_ludgate.jpg", "creed_bratton.jpg", "gina.jpg", "robin.jpg"]
  };
  
  // Function to shuffle an array (Fisher-Yates)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Build the randomized lineup
  function createLineup() {
    const lineupDiv = document.getElementById("lineup");
    lineupDiv.innerHTML = ""; // Clear previous
  
    // Create a shuffled list of number positions (0-9)
    const positions = shuffle([0,1,2,3,4,5,6,7,8,9]);
  
    // For each position, pick a random character from that ranking
    positions.forEach(pos => {
      const rankArray = rankings[pos];
      const randomChar = rankArray[Math.floor(Math.random() * rankArray.length)];
  
      // Create a card div for this character
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p><strong>${randomChar}</strong></p>
        <p>Rank: ${pos}</p>
      `;
      lineupDiv.appendChild(card);
    });
  }
  
  // Load lineup when page loads
  createLineup();
  