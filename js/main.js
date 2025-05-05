// // let rankings =
// // {
// //     1: [charles_minor, ],
// //     2: []
// // }



// // TV character rankings by number (1-10, where 10 is 0)
// let rankings = {
//     1: ["charles_minor.jpg", "amy_santiago.jpg", "terry_crews.jpg", "monica.jpg", "ross.jpg", "claire_dunphy.jpg", "nathan_shelley.jpg", "lucas_sinclair.jpg", "luther_umbrella.jpg", "jay_pritchett.jpg"],
//     2: ["pam_beesley.jpg", "jim_halpert.jpg", "rachel.jpg", "leonard_hofstadter.jpg", "phyllis.jpg", "angela.jpg", "tom_haverford.jpg", "manny_delgado.jpg", "chris_traeger.jpg", "mitchell_modern_family.jpg"],
//     3: ["nellie.jpg", "mark_brandanawitz.jpg", "ben_umbrella.jpg", "raj.jpg", "hailey.jpg", "andy_bernard.jpg", "mike.jpg", "gloria.jpg", "erin_hannon.jpg", "janice_friends.jpg"],
//     4: ["cece.jpg", "stanley.jpg", "penny.jpg", "elaine_bennis.jpg", "kelly.jpg", "ryan.jpg", "coach.jpg", "joey.jpg", "allison_umbrella.jpg", "aly_new_girl.jpg"],
//     5: ["jess.jpg", "rosa_diaz.jpg", "ben_wyatt.jpg", "coach_new_girl.jpg", "ted_lasso_soccer_player.jpg", "george_costanza.jpg", "donna.jpg", "captain_holt.jpg", "nancy.jpg", "robby_new_girl.jpg"],
//     6: ["toby.jpg", "luke_modern_family_son.jpg", "jerry.jpg", "ted_lasso_soccer_player2.jpg", "jan_levinson.jpg", "coach_beard.jpg", "jean_ralphio.jpg", "schmidt.jpg", "viktor_umbrella.jpg", "diego_umbrella.jpg"],
//     7: ["sheldon.jpg", "amy_farrah_fowler.jpg", "the_boss_lady_ted_lasso.jpg", "chandler.jpg", "cameron_modern_family.jpg", "phoebe.jpg", "winston.jpg", "meredith.jpg", "joyce.jpg", "will_byers.jpg"],
//     8: ["nick.jpg", "jake_peralta.jpg", "newman.jpg", "howard.jpg", "kramer.jpg", "danny_ted_lasso.jpg", "steve_harrington.jpg", "phil.jpg", "kevin_malone.jpg", "number_5.jpg"],
//     9: ["michael_scott.jpg", "madmax.jpg", "charles_boyle.jpg", "leslie_knope.jpg", "ted_lasso.jpg", "outside_dave.jpg", "mose.jpg", "ron.jpg", "jim_hopper.jpg", "dustin_henderson.jpg"],
//     0: ["dwight.jpg", "andy_dwyer.jpg", "jerry_gergich.jpg", "hitchcock_and_scully.jpg", "klaus_umbrella.jpg", "elle.jpg", "april_ludgate.jpg", "creed_bratton.jpg", "gina.jpg", "robin.jpg"]
//   };
  
//   
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
  
//  
//   function createLineup() {
//     const lineupDiv = document.getElementById("lineup");
//     lineupDiv.innerHTML = ""; // Clear previous
  
//     // Create a shuffled list of number positions (0-9)
//     const positions = shuffle([0,1,2,3,4,5,6,7,8,9]);
  
//     // For each position, pick a random character from that ranking
//     positions.forEach(pos => {
//       const rankArray = rankings[pos];
//       const randomChar = rankArray[Math.floor(Math.random() * rankArray.length)];
  
//       // Create a card div for this character
//       const card = document.createElement("div");
//       card.className = "card";
//       card.innerHTML = `
//         <p><strong>${randomChar}</strong></p>
//         <p>Rank: ${pos}</p>
//       `;
//       lineupDiv.appendChild(card);
//     });
//   }
  
//   // Load lineup when page loads
//   createLineup();
  

let rankings = {
    1: ["img/1/charles_minor.jpg", "img/1/amy_santiago.avif", "img/1/terry_crews.avif", "img/1/monica.jpg", "img/1/ross.jpg", "img/1/claire_dunphy.jpg", "img/1/Nathan_shelley.jpg", "img/1/lucas_sinclaire.jpg", "img/1/luther_umbrella.jpg", "img/1/jay_pritchett.jpg"],
    2: ["img/2/pam_beesly.jpg", "img/2/jim_halpert.jpg", "img/2/rachel.avif", "img/2/leonard_hofstadter.jpeg", "img/2/phyllis.jpg", "img/2/angela.jpeg", "img/2/tom_haverford.jpeg", "img/2/manny_delgado.jpg", "img/2/chris_traeger.jpg", "img/2/mitchell.jpg"],
    3: ["img/3/nellie.jpg", "img/3/mark_brandanawitz.jpg", "img/3/ben_umbrella.jpg", "img/3/raj.webp", "img/3/hailey.jpg", "img/3/andy_bernard.jpg", "img/3/ryan.webp","img/3/gloria.jpg", "img/3/erin_hannon.jpg", "img/3/janice.jpg"],
    4: ["img/4/cece.jpg", "img/4/stanley.jpg", "img/4/penny.jpg", "img/4/elaine_bennes.jpg", "img/4/kelly.jpg", "img/4/coach.jpg",  "img/4/mike.jpg", "img/4/joey.jpg", "img/4/allison_umbrella.jpg", "img/4/aly_new_girl.webp"],
    5: ["img/5/jess.jpg", "img/5/rosa_diaz.jpg", "img/5/ben_wyatt.jpg", "img/5/coach.jpg", "img/5/jamie.jpg", "img/5/george_costanza.jpg", "img/5/donna.jpg", "img/5/captain_holt.avif", "img/5/nancy.jpg", "img/5/robby.avif"],
    6: ["img/6/toby.jpg", "img/6/luke.jpg", "img/6/jerry_seinfeld.jpg", "img/6/roy.jpg", "img/6/jan.jpg", "img/6/boss_lady.jpg", "img/6/jean_ralphio.jpg", "img/6/schmidt.jpg", "img/6/viktor.jpg", "img/6/diego.jpg"],
    7: ["img/7/sheldon.webp", "img/7/amy.jpg", "img/7/ted_lasso.jpg", "img/7/chandler.webp", "img/7/cameron.webp", "img/7/phoebe.jpg", "img/7/winston.webp", "img/7/meredith.jpg", "img/7/joyce.jpg", "img/7/will_byers.jpg"],
    8: ["img/8/nick.avif", "img/8/jake_peralta.jpg", "img/8/newman.jpg", "img/8/howard.jpg", "img/8/kramer.jpg", "img/8/danny_rojas.avif", "img/8/jim_hopper.webp", "img/8/phil.jpg", "img/8/kevin.webp", "img/8/number_5.webp"],
    9: ["img/9/michael_scott.jpg", "img/9/madmax.jpg", "img/9/charles_boyle.avif", "img/9/leslie_knope.jpg", "img/9/coach_beard.jpg", "img/9/jerry_gergich.jpg", "img/9/mose.jpg", "img/9/ron.jpg", "img/9/steve_harrington.jpg", "img/9/dustin.jpg"],
    0: ["img/0/dwight.jpg", "img/0/andy_dwyer.webp", "img/0/robin.jpg", "img/0/hitchcock_and_skully.webp", "img/0/klaus_umbrella.avif", "img/0/elle.webp", "img/0/april_ludgate.webp", "img/0/creed_bratton.avif", "img/0/gina.jpg", "img/0/outside_dave.avif"]
  };

  
  
  let phoneNumber = "";
  
  // shuffling 
  function shuffle(array) 
  {
    for (let i = array.length - 1; i > 0; i--) 
    {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  
  function generateLineup() 
  {
    // shuffle(rankings);

    // for (let i = 0; i < rankings.length; i++) 
    // {
    //     let lineup = document.getElementById(i);
    //     lineup.innerHTML = rankings[i];
    // }

    // const positions = shuffle([0,1,2,3,4,5,6,7,8,9]);
    // //const lineup = shuffle([0,1,2,3,4,5,6,7,8,9]);
  

    

    // positions.forEach((pos, index) => {
    //   const box = document.getElementById(positions[index]);
    //   const rankArray = rankings[positions[index]];
    //   const randomChar = rankArray[Math.floor(Math.random() * rankArray.length)];
      
    //   box.innerHTML = `<img src="./${randomChar}" alt="${randomChar}" style="max-width: 90%; max-height: 90%;">`;
      
 
    //   box.setAttribute("data-number", positions[index]);
    // });

    // First, clear the phone number
  //phoneNumber = "";
  updatePhoneNumberDisplay();
  
  // Create array of all possible digits (0-9)
  const allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // Shuffle the digits to randomize box positions
  const shuffledDigits = shuffle([...allDigits]);
  
  // Get the lineup container
  const lineup = document.querySelector('.lineup');
  
  // Clear the existing boxes
  lineup.innerHTML = '';
  
  // Create new boxes in shuffled order
  shuffledDigits.forEach(digit => {
    // Select a random character from this digit's ranking
    const rankArray = rankings[digit];
    const randomChar = rankArray[Math.floor(Math.random() * rankArray.length)];
    
    // Create a new box
    const box = document.createElement('div');
    box.className = 'box';
    box.setAttribute('data-number', digit);
    
    // Add the image to the box
    box.innerHTML = `<img src="./${randomChar}" alt="${randomChar}" style="max-width: 90%; max-height: 90%;">`;
    
    // Add click event listener
    box.addEventListener('click', () => {
      if (phoneNumber.length < 10) {
        phoneNumber += digit;
        updatePhoneNumberDisplay();
      }
    });
    
    // Add the box to the lineup
    lineup.appendChild(box);
  });
  updatePhoneNumberDisplay();
  }
  
  
  
 
  function updatePhoneNumberDisplay() 
  {
    document.getElementById("phoneNumberDisplay").textContent = `Phone Number: ${phoneNumber}`;
  }

  document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
      const number = box.getAttribute("data-number");

      if (number !== null && phoneNumber.length < 10) 
        {
        phoneNumber += number;
        updatePhoneNumberDisplay();
      }
    });
  });
  

  function submit() 
  {
    if (phoneNumber.length == 10) {
        alert("Phone Number submitted: " + phoneNumber);
    }
    else 
    {
        alert("Not sufficient length");     
    }
    phoneNumber = "";
    updatePhoneNumberDisplay();
  }

  function reset() 
  {
    phoneNumber = ""; 
    generateLineup();
    updatePhoneNumberDisplay();
    
  }

//   function shuffleLineup() {
//     const lineup = document.querySelector('.lineup');
//     const boxes = Array.from(lineup.children);
  
//     
//     for (let i = boxes.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
//     }
  
//     // Append the boxes in new order
//     boxes.forEach(box => lineup.appendChild(box));
//   }
  
  
  // Load lineup when page loads
  generateLineup();
  