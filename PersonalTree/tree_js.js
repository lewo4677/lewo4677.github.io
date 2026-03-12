const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

let course = []; 

let play = false;

let ran_vec = [];

let count = 0;
let level = 1;
let alr_won = false;

let pos_row = 5;

let leave = false;

let die = false;
let flag = false;

let climb = 0;

let turn = 1;


function generateCourse(int_tree_times, int_ground_times, int_pit_times, int_hill_times, int_pond_times, int_crawl_times)
{
    
    course = [];

    let tree = [[' ', ' ', '_', '_', '_', ' ', ' '],
                       [' ', '{', ' ', ' ', ' ', '}', ' '],
                       [' ', '{', ' ', ' ', ' ', '}', ' '],
                       [' ', '\\', '_', '_', '_', '/', ' '],
                       [' ', ' ', '|', ' ', '|', ' ', ' '],
                       ['_', '_', '|', '_', '|', '_', '_'],
                       [' ', ' ', ' ', ' ', ' ', ' ', ' ']];


    let ground = [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
                       [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      ['_', '_', '_', '_', '_', '_', '_'],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' ']];


     let pit = [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
                       [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      ['_', '_', ' ', ' ', ' ', '_', '_'],
                      [' ', '|', ' ', ' ', ' ', '|', ' ']];


    let hill = [['*', ' ', ' ', ' ', '*', ' ', ' '],
                       [' ', ' ', ' ', '*', ' ', ' ', '*'],
                      [' ', ' ', '*', ' ', ' ', '*', ' '],
                      [' ', ' ', '_', '_', '_', ' ', ' '],
                      [' ', '/', ' ', ' ', ' ', '\\', ' '],
                      ['/', ' ', ' ', ' ', ' ', ' ', '\\'],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' ']];

    let pond = [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
                       [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', '<', ' ', '<', ' ', ' ', '<'],
                      [' ', ' ', '<', ' ', ' ', '<', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      ['~', '~', '~', '~', '~', '~', '~']];         

     
    let crawl = [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
                         [' ', ' ', '/', ' ', '\\', ' ', ' '],
                         [' ', '/', ' ', ' ', ' ', '\\', ' '],
                         ['/', '|', '[', ']', ' ', '|', '\\'],
                         ['.', '|', '[', ']', '_', '|', '.'],
                         [' ', '\\', '_', '_', '_', '/', ' '],
                         ['\\', '_', '_', '_', '_', '_', '/']];                  
    

    let start =  [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
                       [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                      ['_', '_', '_', '_', '_', '_', '_'],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' ']];


    let finish = [[' ', ' ', ' ', '_', '_', ' ', ' '],
                       [' ', ' ', ' ', '|', '_', '>', ' '],
                      [' ', ' ', ' ', '|', ' ', ' ', ' '],
                      [' ', ' ', ' ', '|', ' ', ' ', ' '],
                      [' ', '_', '_', '|', '_', '_', ' '],
                      ['_', '|', '_', '_', '_', '|', '_'],
                      [' ', ' ', ' ', ' ', ' ', ' ', ' ']];



    let total = int_tree_times + int_ground_times + int_pit_times + int_hill_times + int_pond_times + int_crawl_times;

    //cout << total << endl;
    //int ran_array[total];
            //making ran_vec global for die cases

    
    let tree_count = 0;
    let ground_count = 0;
    let pit_count = 0;
    let hill_count = 0;
    let pond_count = 0;
    let crawl_count = 0;


    
    ran_vec.push(-1);
   
                    //UP TO THIS WORKS


    let ran; //int    //= rand() % 2;
    for (let i = 0; i < total; i++)
    {
        ran = Math.floor(Math.random() * 1200); // =  ran = rand() % 120;

        //cout << ran << endl;

        if (tree_count >= int_tree_times && ran < 200)
        {
            // ran_vec.push_back(1);
            // ground_count++;
            i--;
            continue;
        }
        if (ground_count >= int_ground_times && ran >= 200 && ran < 400)
        {
            // ran_vec.push_back(0);
            // tree_count++;
            i--;
            continue;
        }
        if (pit_count >= int_pit_times && ran >= 400 && ran < 600)
        {
            // ran_vec.push_back(0);
            // tree_count++;
            i--;
            continue;
        }
        if (hill_count >= int_hill_times && ran >= 600 && ran < 800)
        {
            // ran_vec.push_back(0);
            // tree_count++;
            i--;
            continue;
        }
         if (pond_count >= int_pond_times && ran >= 800 && ran < 1000)
        {
            // ran_vec.push_back(0);
            // tree_count++;
            i--;
            continue;
        }
        if (crawl_count >= int_crawl_times && ran >= 1000 && ran < 1200)
        {
            // ran_vec.push_back(0);
            // tree_count++;
            i--;
            continue;
        }



        else if (ran < 200) //tree
        {
            ran_vec.push(0);
            tree_count++;
        }
        else if (ran >= 200 && ran < 400) //ground
        {
            ran_vec.push(1);
            ground_count++;
        }
        else if (ran >= 400 && ran < 600) //pit
        {
            ran_vec.push(2);
            pit_count++;
        }
        else if (ran >= 600 && ran < 800) //pit
        {
            ran_vec.push(3);
            hill_count++;
        }
        else if (ran >= 800 && ran < 1000) //pit
        {
            ran_vec.push(4);
            pond_count++;
        }
        else if (ran >= 1000 && ran < 1200) //pit
        {
            ran_vec.push(5);
            crawl_count++;
        }
        
    }

    ran_vec.push(-2);

                    //UP TO HERE WORKS

    let count = 0;
    let mod_count = 0;

    let line = "";

    for (let i = 0; i < 7; i++)
    {
        line = "";
        for (let j = 0; j < 7 * (total + 2); j++)
        {              //j < # in row i
            if (ran_vec[mod_count] == -1)
            {
                line += start[i][j % 7];
                //cout << tree[i][j % 7];
            }if (ran_vec[mod_count] == -2)
            {
                line += finish[i][j % 7];
                //cout << tree[i][j % 7];
            }
            if (ran_vec[mod_count] == 0)
            {
                line += tree[i][j % 7];
                //cout << tree[i][j % 7];
            }
            if (ran_vec[mod_count] == 1)
            {
                line += ground[i][j % 7];
                //cout << ground[i][j % 7];
            }
            if (ran_vec[mod_count] == 2)
            {
                line += pit[i][j % 7];
                //cout << pit[i][j % 7];
            }
            if (ran_vec[mod_count] == 3)
            {
                line += hill[i][j % 7];
                //cout << pit[i][j % 7];
            }
            if (ran_vec[mod_count] == 4)
            {
                line += pond[i][j % 7];
                //cout << pit[i][j % 7];
            }
            if (ran_vec[mod_count] == 5)
            {
                line += crawl[i][j % 7];
                //cout << pit[i][j % 7];
            }

            count++;
            
            if (count % 7 == 0)
            {
                mod_count++;
            }
        }
        course.push(line);
        //cout << endl;
        mod_count = 0;
    }
    
    return course;
}

function printCourse(course, choice, level)
{
    let _7lines = '\n';
    let line = "";

    // count = 0; 
    let len = course[0].length;


    let pos_row = 5;

    let leave = false;

    die = false;
    flag = false;
    //bool cout_climb = false;

    //count = 0;
    climb = 0;

    turn = 1;
    
        for (let i = 0; i < 7; i++)
        {
            line = "";
            for (let j = 0; j < len - count; j++)
            {
                if (count === 0 && i === pos_row && j === 2)
                {
                    //cout << WALK << course[i][j + count] << RESET;
                    line += '<span class="walk">' + course[i][j + count] + '</span>';
                }
                else 
                {
                    //cout << course[i][j + count];
                    line += course[i][j + count];
                }

            }
            line += '\n';
            _7lines += line;
        }
        document.getElementById("game-border").innerHTML = _7lines;
    
        
        
    
}

function randInt(min, max)
{
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function playGame() 
{
    if (isMobile)
    {
        document.getElementById("hiddenInput").focus();
    }
    document.getElementById("messages").textContent = "";
    //extend box and play level 1
    let box = document.getElementById("game-border");
    let nospace = document.getElementById("space");

    box.style.fontSize = "30px";
    
    // add transition with JS
    box.style.transition = "height 1.5s ease-in-out";
    box.style.height = "300px";

    nospace.style.transition = "height 1.5s ease-in-out";
    nospace.style.height = "10px";
    
    
    course = []; 
    play = false;

    ran_vec = [];

    count = 0;

//  let _7lines = "\n";
//     let line = "";

    // count = 0; 
    


    pos_row = 5;

    leave = false;

    die = false;
    flag = false;
    //bool cout_climb = false;

    //let count = 0;
    climb = 0;

    turn = 1;
    

    let tree_times = randInt(9,12);
    let crawl_times = randInt(2,5);
    let hill_times = randInt(5,8);
    let pond_times = randInt(5,8);
    let pit_times = randInt(6,9);
    let ground_times = 45 - crawl_times - tree_times - hill_times - pond_times - pit_times;

    course = generateCourse(tree_times, ground_times, pit_times, hill_times, pond_times, crawl_times);

    printCourse(course, 'w', 1);
    play = true;

    

}


function handleKey(event)
{
    
    // if (event === document.getElementById("play"))
    // {
    //     playGame();
    // }
    document.getElementById("messages").textContent = " ";
    
    if (flag === true)
    {
        if (alr_won === false)
        {
            alr_won = true;
            level++;
            document.getElementById("messages").textContent = "Congratulations, you won! ";//Ready to move onto level " + level + "?";
        }
        return;
        
    }

    if (!play)
    {
        return;
    }

    // die = false; 
    // flag = false;

    let _7lines = '\n';
    let line = "";

    let len = course[0].length;
    let choice = event.key.toLowerCase();

    // if (die == true)
    // {
    //     return; 
    // }
       

    
    if (!(choice === " " || choice === "s" || choice === "w" || choice === "c" || choice === "t"))
    {
        if (!die)
        {
            document.getElementById("messages").textContent = "Invalid key";
        }
        
        return;
        //keep = choice;
    }
    else
    {
        if (count === 0)
        {
            count += 3; 
        }
        
        //choice = keep;
    }

    if (die == true)
    {
        return; 
    }
       

    
    if (count != 0)
        {
            if ((course[6][2 + count] !== '~') && choice === "s")
            {
                die = true;
            }
            else if (len - count <= 10)
            {
                //count = len - 310;
                flag = true;
            }
                        //if hit end of tree           //if in middle of tree    //if hit start of tree
            if (choice == " ")
            {
                if ((course[2][2 + count] === '}' || course[2][3 + count] === '}' || course[2][4 + count] === '}' || course[2][2 + count] === '{'))
                {
                    die = true;
                }
                if ((course[6][2 + count] === '\\' || course[6][3 + count] === '~' || course[6][4 + count] === '/' || course[6][4 + count] === '_'))
                {                                                                                                         ///idk what i did it might break it
                    die = true;
                }
                if ((course[3][2 + count] === '_') || (course[4][2 + count] === '/' || course[4][2 + count] === '\\') || (course[5][2 + count] === '/' || course[5][2 + count] === '\\'))
                {
                    die = true;
                }

            }
            if (choice === "w" && course[5][2 + count] !== '_'  && course[5][2 + count] !== '|')
            {
                die = true;
            }

            if (choice === "c")
            {
                let good = 0;
                if (course[3][2 + count] === '_')
                {
                    climb = 1;
                    good++;
                }
                if (course[4][2 + count] === '/' || course[4][2 + count] === '\\')
                {
                    climb = 2;
                    good++;
                }
                if (course[5][2 + count] === '/' || course[5][2 + count] === '\\')
                {
                    climb = 3;
                    good++;
                }
                if (good !== 1)
                {
                    die = true;
                }
            }

            if ((choice === "t") && ((course[6][2 + count] !== '_') && (course[6][2 + count] !== '\\') && (course[6][2 + count] !== '/')))
            {
                die = true;
            }
        }
        //printing course
        
        for (let i = 0; i < 7; i++)
        {
            line = "";
            for (let j = 0; j < len - count; j++)
            {
                if (count === 0 && i === pos_row && j === 2)
                {
                    //cout << WALK << course[i][j + count] << RESET;
                    line += '<span class="walk">' + course[i][j + count] + '</span>';
                }

                else if (i === 2 && j === 2 && choice === " ")
                {
                    if (die == true)
                    {
                        // cout << DIE << course[i][j + count] << RESET;
                        line += '<span class="die">' + course[i][j + count] + '</span>';
                        
                    }
                    else if (flag === true)
                    {
                        // cout << FLY << course[i][j + count] << RESET;
                        line += '<span class="fly">' + course[i][j + count] + '</span>';
                    }
                    else
                    {
                        // cout << FLY << course[i][j + count] << RESET;
                        line += '<span class="fly">' + course[i][j + count] + '</span>';
                    }
                }
                else if (i === 6 && j === 2 && choice === "s")
                {
                    if (die === true)
                    {
                        //cout << DIE << course[i][j + count] << RESET;
                        line += '<span class="die">' + course[i][j + count] + '</span>';
                    }
                    else
                    {
                        //cout << SWIM << course[i][j + count] << RESET;
                        line += '<span class="swim">' + course[i][j + count] + '</span>';
                    }
                    
                }
                else if (i === 5 && j === 2 && choice === "w")
                {
                    if (die === true)
                    {
                        //cout << DIE << course[i][j + count] << RESET;
                        line += '<span class="die">' + course[i][j + count] + '</span>';
                    }
                    else if (flag === true)
                    {
                        //cout << WALK << course[i][j + count] << RESET;
                        line += '<span class="walk">' + course[i][j + count] + '</span>';
                    }
                    else
                    {
                        //cout << WALK << course[i][j + count] << RESET;
                        line += '<span class="walk">' + course[i][j + count] + '</span>';
                    }
                    
                }
                else if (choice === "c" && die === true && i === 5 && j === 2)
                {
                    line += '<span class="die">' + course[i][j + count] + '</span>';
                }
                else if (choice === "c" && ((climb === 1 && i === 3 && j === 2) || (climb === 2 && i === 4 && j === 2) || (climb === 3 && i === 5 && j === 2)))
                {
                    if (climb === 1 && i === 3 && j === 2)
                    {
                        //cout << CLIMB << course[i][j + count] << RESET;
                        line += '<span class="climb">' + course[i][j + count] + '</span>';
                        climb = 0;
                    }
                    if (climb === 2 && i === 4 && j === 2)
                    {
                        //cout << CLIMB << course[i][j + count] << RESET;
                        line += '<span class="climb">' + course[i][j + count] + '</span>';
                        climb = 0;
                    }
                    if (climb === 3 && i === 5 && j === 2)
                    {
                        //cout << CLIMB << course[i][j + count] << RESET;
                        line += '<span class="climb">' + course[i][j + count] + '</span>';
                        climb = 0;
                    }
                }
                else if (i === 6 && j === 2 && choice === "t")
                {
                    if (die === true)
                    {
                        //cout << DIE << course[i][j + count] << RESET;
                        line += '<span class="die">' + course[i][j + count] + '</span>';
                    }
                    else if (flag === true)
                    {
                        //cout << CRAWL << course[i][j + count] << RESET;
                        line += '<span class="crawl">' + course[i][j + count] + '</span>';
                    }
                    else
                    {
                        //cout << CRAWL << course[i][j + count] << RESET;
                        line += '<span class="crawl">' + course[i][j + count] + '</span>';
                    }
                }

                else 
                {
                    //cout << course[i][j + count];
                    line += course[i][j + count];
                }

            }
            line += '\n';
            _7lines += line;
        }
        document.getElementById("game-border").innerHTML = _7lines;

        if (die === false)
        {
            if (choice === " " || choice === "s" || choice === "w" || choice === "c" || choice === "t")
            {

                count += 3;

                document.getElementById("messages").textContent = "";
               //keep = choice;
            }
            else
            {
                document.getElementById("messages").textContent = "Invalid key";
                //choice = keep;
            }
            
        }
        else
        {
            document.getElementById("messages").textContent = "You died! Hit \"Play\" to play again";
        }

    
        
}

document.getElementById("play").addEventListener("click", playGame);

if (!isMobile)
{
    document.addEventListener("keydown", function(e)
    {

        if (isMobile) 
        {
            return; // ignore on phone
        }
        handleKey(e);
    })
}

// window.onload = function () 
// {
//   document.getElementById("mobileInput").focus();
// };

if (isMobile)
{
    document.getElementById("hiddenInput").addEventListener("input", function(e)
    {
        let key = e.target.value;

        handleKey({ key: key });

        e.target.value = "";
    });
}