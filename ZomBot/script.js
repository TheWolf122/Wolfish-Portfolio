document.addEventListener("DOMContentLoaded", function () {
    let resultPage = document.getElementById("result-page");

    function checkAndTriggerGif() {
        if (resultPage.style.display !== "none") { 
            let randomInterval = Math.floor(Math.random() * 70000) + 10000;
            setTimeout(showFloatingGif, randomInterval); 
        }
    }

   

    let observer = new MutationObserver(checkAndTriggerGif);
    observer.observe(resultPage, { attributes: true, attributeFilter: ["style"] });

    let style = document.createElement("style");
    style.innerHTML = `
        @keyframes floatUpDown {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); } /* Moves up */
            100% { transform: translateY(0px); } /* Moves back down */
        }
    `;
    document.head.appendChild(style);
});

zomBot = document.getElementById("Zombot.gif");

document.getElementById('start1-button').addEventListener('click', function () {
    const popSound = document.getElementById('popSound');
    popSound.play();
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('interm').style.display = 'flex';
});

document.getElementById('start-button').addEventListener('click', function () {
    const notifSound = document.getElementById('notifSound');
    popSound.play();
    document.getElementById('interm').style.display = 'none';
    document.getElementById('phone-screen').style.display = 'flex';
});

let currentMessageIndex = 0;
const scores = {H: 0, Z: 0, G: 0, Null: 0};

const dialogue = [
    // 0 (0)
    {
        speaker: 'bot',
        text: ["*New notification from Unknown*"],
        choices: [
            { id: 1, text: '*Open*', type: 'Null', weight: 0, next: 1, followUpText: [] },

            { id: 2, text: 'DEBUG', type: 'Null', weight: 0, next: 19, followUpText: [] },
        ]
    },
    // 1 (1)
    {
        speaker: 'bot',
        text: ["Hi! I'm Zombot, your personal undead friend!!!!"],
        choices: [
            {id: 1, text: 'AHHHHHHH! A ZOMBIE!!!!', type: 'H', weight: 1, next: 3, followUpText: []},
            {id: 2, text: 'Hey friend!', type: 'Z', weight: 1, next: 4, followUpText: []},
            {id: 3, text: '*throws sock*', type: 'H', weight: 1, next: 5, followUpText: []},
            {id: 4, text: 'Nice to meet you!!!', type: "Null", weight: 1, next: 6, followUpText: []},
        ]
    },    
    // 2 (2)
    {
        speaker: 'bot',
        text: ["Hi! I'm Zombot, your personal undead friend!"],
        choices: [
            {id: 1, text: 'AHHHHHHH! A ZOMBIE!!!!', type: 'H', weight: 1, next: 3, followUpText: []},
            {id: 2, text: 'Hey friend!', type: 'Z', weight: 1, next: 4, followUpText: []},
            {id: 3, text: '*throws sock*', type: 'H', weight: 1, next: 5, followUpText: []},
            {id: 4, text: 'Nice to meet you!!!', type: "Null", weight: 1, next: 6, followUpText: []},
        ]
    },

    // 3 (2_1)
    {
        speaker: 'bot',
        text: ["Its okay, dont be scared! Im just digital!", "I cant even give your device a virus!!! Probably....", "Wasn't it you who want to play this quiz?", "Anyway... have you played HVZ before?"],
        choices: [
            { id: 1, text: 'I live and BREATHE this game!?', type: 'Null', weight: 0, next: 7, followUpText: [] },
            { id: 2, text: 'im a seaspned player B)', type: 'Null', weight: 0, next: 8, followUpText: [] },
            { id: 3, text: 'HVZ? What are you talking about?', type: 'G', weight: 1, next: 9, followUpText: [] },
            { id: 4, text: 'No, but Im ready!!!', type: 'Null', weight: 0, next: 10, followUpText: [] },
        ]
    },

    // 4 (2_2)
    {
        speaker: 'bot',
        text: ['Hello!!', ':D', "Have you played HVZ before?"],
        choices: [
            { id: 1, text: 'I live and BREATHE this game!?', type: 'Null', weight: 0, next: 7, followUpText: [] },
            { id: 2, text: 'im a seaspned player B)', type: 'Null', weight: 0, next: 8, followUpText: [] },
            { id: 3, text: 'HVZ? What are you talking about?', type: 'G', weight: 1, next: 9, followUpText: [] },
            { id: 4, text: 'No, but Im ready!!!', type: 'Null', weight: 0, next: 10, followUpText: [] },
        ]
    },

    // 5 (2_3)
    {
        speaker: 'bot',
        text: ['yeah, okay, thats fair.', 'Dont\'t worry, im just digital!', 'I cant even give your device a virus!!! Probably....', "Have you played HVZ before?"],
        choices: [
            { id: 1, text: 'I live and BREATHE this game!?', type: 'Null', weight: 0, next: 7, followUpText: [] },
            { id: 2, text: 'im a seaspned player B)', type: 'Null', weight: 0, next: 8, followUpText: [] },
            { id: 3, text: 'HVZ? What are you talking about?', type: 'G', weight: 1, next: 9, followUpText: [] },
            { id: 4, text: 'No, but Im ready!!!', type: 'Null', weight: 0, next: 10, followUpText: [] },
        ]

    },
    // 6 (2_4)
    {
        speaker: 'bot',
        text: ['You too!!!', 'I love new friends!', 'Have you played HVZ before?'],
        choices: [
            { id: 1, text: 'I live and BREATHE this game!?', type: 'Null', weight: 0, next: 7, followUpText: [] },
            { id: 2, text: 'im a seaspned player B)', type: 'Null', weight: 0, next: 8, followUpText: [] },
            { id: 3, text: 'HVZ? What are you talking about?', type: 'G', weight: 1, next: 9, followUpText: [] },
            { id: 4, text: 'No, but Im ready!!!', type: 'Null', weight: 0, next: 10, followUpText: [] },
        ]
    },

    // 7 (3_1)
    {
        speaker: 'bot',
        text: ['Woah ho, we\'ve got a real superfan over here!', 'I bet you know all the best hiding spots!', 'But back to buisness...','The sun rises on the first day of the apocolypse. What are you doing?'],
        choices: [
            { id: 1, text: 'Stockpiling my socks.', type: 'H', weight: 1, next: 11, followUpText: [] },
            { id: 2, text: 'Finding a zombie to join the hoarde!', type: 'Z', weight: 1, next: 12, followUpText: [] },
            { id: 3, text: 'Eating food at "last supper" with other players!', type: 'Null', weight: 1, next: 13, followUpText: [] },
            { id: 4, text: 'Going to classes. Zombies arent real!', type: 'G', weight: 0, next: 14, followUpText: [] },
        ]
    },

    // 8 (3_2)
    {
        speaker: 'bot',
        text: ['Welcome back!!!', 'I bet you know all the best hiding spots!', 'But back to buisness...','The sun rises on the first day of the apocolypse. What are you doing?'],
        choices: [
            { id: 1, text: 'Stockpiling my socks.', type: 'H', weight: 1, next: 11, followUpText: [] },
            { id: 2, text: 'Finding a zombie to join the hoarde!', type: 'Z', weight: 1, next: 12, followUpText: [] },
            { id: 3, text: 'Eating food at "last supper" with other players!', type: 'Null', weight: 1, next: 13, followUpText: [] },
            { id: 4, text: 'Going to classes. Zombies arent real!', type: 'G', weight: 0, next: 14, followUpText: [] },
        ]
    },

    // 9 (3_3)
    {
        speaker: 'bot',
        text: ['Humans Vs. Zombies of course!', 'yknow... the game where you thow socks at zombies...?','Ahem.','The sun rises on the first day of the apocolypse. What are you doing?'],
        choices: [
            { id: 1, text: 'Stockpiling my socks.', type: 'H', weight: 1, next: 11, followUpText: [] },
            { id: 2, text: 'Finding a zombie to join the hoarde!', type: 'Z', weight: 1, next: 12, followUpText: [] },
            { id: 3, text: 'Eating food at "last supper" with other players!', type: 'Null', weight: 1, next: 13, followUpText: [] },
            { id: 4, text: 'Going to classes. Zombies arent real!', type: 'G', weight: 0, next: 14, followUpText: [] },
        ]
    },

    // 10 (3_4)
    {
        speaker: 'bot',
        text: ['Welcome! You\'re gonna love it here!','The sun rises on the first day of your first apocolypse. What are you doing?'],
        choices: [
            { id: 1, text: 'Stockpiling my socks.', type: 'H', weight: 1, next: 11, followUpText: [] },
            { id: 2, text: 'Finding a zombie to join the hoarde!', type: 'Z', weight: 1, next: 12, followUpText: [] },
            { id: 3, text: 'Eating food at "last supper" with other players!', type: 'Null', weight: 1, next: 13, followUpText: [] },
            { id: 4, text: 'Going to classes. Zombies arent real!', type: 'G', weight: 0, next: 14, followUpText: [] },
        ]
    },

    //11 (4_1)
    {
        speaker: 'bot',
        text: ['You can never have too many!','You are now the proud owner of 100 socks!','Oh no, theres a Zombie! What do you do?'],
        choices: [
            { id: 1, text: 'Go say hi!', type: 'Z', weight: 1, next: 15, followUpText: [] },
            { id: 2, text: 'Run away as fast as I can to somewhere safe!', type: 'H', weight: 1, next: 16, followUpText: [] },
            { id: 3, text: 'Wonder why that person is wearing an orange bandana on their head. Go to class!', type: 'G', weight: 1, next: 17, followUpText: [] },
            { id: 4, text: 'I throw a sock, I\'ve got this!', type: 'H', weight: 0, next: 18, followUpText: [] },
        ]
    },

    //12 (4_2)
    {
        speaker: 'bot',
        text: ['Dying already? Understandable.', 'Look, theres a Zombie! What do you do?'],
        choices: [
            { id: 1, text: 'Go say hi!', type: 'Z', weight: 1, next: 15, followUpText: [] },
            { id: 2, text: 'Run away as fast as I can to somewhere safe!', type: 'H', weight: 1, next: 16, followUpText: [] },
            { id: 3, text: 'Wonder why that person is wearing an orange bandana on their head. Go to class!', type: 'G', weight: 1, next: 17, followUpText: [] },
            { id: 4, text: 'I throw a sock, I\'ve got this!', type: 'H', weight: 0, next: 18, followUpText: [] },
        ]
    },

    //13 (4_3)
    {
        speaker: 'bot',
        text: ['Sounds delicious!','Say hi to everyone for me!','Oh no, theres a Zombie! What do you do?'],
        choices: [
            { id: 1, text: 'Go say hi!', type: 'Z', weight: 1, next: 15, followUpText: [] },
            { id: 2, text: 'Run away as fast as I can to somewhere safe!', type: 'H', weight: 1, next: 16, followUpText: [] },
            { id: 3, text: 'Wonder why that person is wearing an orange bandana on their head. Go to class!', type: 'G', weight: 1, next: 17, followUpText: [] },
            { id: 4, text: 'I throw a sock, I\'ve got this!', type: 'H', weight: 0, next: 18, followUpText: [] },
        ]
    },

    //14 (4_4)
    {
        speaker: 'bot',
        text: ['Alright, well... be careful, okay?','Oh no, theres a Zombie! What do you do?'],    
        choices: [
            { id: 1, text: 'Go say hi!', type: 'Z', weight: 1, next: 15, followUpText: [] },
            { id: 2, text: 'Run away as fast as I can to somewhere safe!', type: 'H', weight: 1, next: 16, followUpText: [] },
            { id: 3, text: 'Wonder why that person is wearing an orange bandana on their head. Go to class!', type: 'G', weight: 1, next: 17, followUpText: [] },
            { id: 4, text: 'I throw a sock, I\'ve got this!', type: 'H', weight: 0, next: 18, followUpText: [] },

        ]
    },

    //15 (5_1)
    {
        speaker: 'bot',
        text: ['Everyone loves Zombie high fives!!!', 'The sun begins to set as you head to Old Main for the first mission.', 'The air is thick with unease as you approach the stairs.','Inside, people gather before the mission begins. How do you spend your time while you wait?'],
        choices: [
            { id: 1, text: 'Saying hi to my friends!', type: 'Null', weight: 1, next: 19, followUpText: [] },
            { id: 2, text: 'Practicing my sock throws!', type: 'H', weight: 1, next: 21, followUpText: [] },
            { id: 3, text: 'Getting ready to hunt for brains!', type: 'H', weight: 1, next: 31, followUpText: [] },
            { id: 4, text: 'Why are there so many people here?', type: 'G', weight: 1, next: 1000, followUpText: [] },
            ]
        },

    //16 (5_2)
    {
        speaker: 'bot',
        text: ['Pro tip! Look for door handles, overhangs, or stairs!', 'The sun begins to set as you head to Old Main for the first mission.', 'The air is thick with unease as you approach the stairs.','Inside, people gather before the mission begins. How do you spend your time while you wait?'],
        choices: [
            { id: 1, text: 'Saying hi to my friends!', type: 'Null', weight: 1, next: 19, followUpText: [] },
            { id: 2, text: 'Practicing my sock throws!', type: 'H', weight: 1, next: 21, followUpText: [] },            
            { id: 3, text: 'Getting ready to hunt for brains!', type: 'H', weight: 1, next: 31, followUpText: [] },
            { id: 4, text: 'Why are there so many people here?', type: 'G', weight: 1, next: 1000, followUpText: [] },
            ]
        },

    //17 (5_3)
    {
        speaker: 'bot',
        text: ['Does the apocolypse mean nothing to you?', 'The sun begins to set as you head to Old Main for the first mission.', 'The air is thick with unease as you approach the stairs.','Inside, people gather before the mission begins. How do you spend your time while you wait?'],
        choices: [
            { id: 1, text: 'Saying hi to my friends!', type: 'Null', weight: 1, next: 19, followUpText: [] },
            { id: 2, text: 'Practicing my sock throws!', type: 'H', weight: 1, next: 21, followUpText: [] },
            { id: 3, text: 'Getting ready to hunt for brains!', type: 'H', weight: 1, next: 31, followUpText: [] },
            { id: 4, text: 'Why are there so many people here?', type: 'G', weight: 1, next: 1000, followUpText: [] },
            ]
        },

    //18 (5_4)
    {
        speaker: 'bot',
        text: ['Get \'em!!!', 'The sun begins to set as you head to Old Main for the first mission.', 'The air is thick with unease as you approach the stairs.','Inside, people gather before the mission begins. How do you spend your time while you wait?'],
        choices: [
            { id: 1, text: 'Saying hi to my friends!', type: 'Null', weight: 1, next: 19, followUpText: [] },
            { id: 2, text: 'Practicing my sock throws with my friends!', type: 'H', weight: 1, next: 21, followUpText: [] },
            { id: 3, text: 'Getting ready to hunt for brains!', type: 'H', weight: 1, next: 31, followUpText: [] },
            { id: 4, text: 'No, seriously, why are there so many people here?', type: 'G', weight: 1, next: 1000, followUpText: [] },
            ]
        },

    //19 (6_1)
     {
        speaker: 'bot',
        text: ['Okay look.','I cant tell if you\'re a human or a zombie.','But I want to finsih this quiz, so...', 'please just tell me what you are.'],
        choices: [
            { id: 1, text: 'I am a human!', type: 'H', weight: 1, next: 21, followUpText: [] },
            { id: 2, text: 'I am a zombie!', type: 'Z', weight: 1, next: 31, followUpText: [] },
            { id: 3, text: 'I am a sock!', type: 'Null', weight: 1, next: 20, followUpText: [] },
        ]
    },


//20 SOCK
    {
        speaker: 'bot',
        text: ['You are a sock!','wait...','You\'re a sock?', 'Thats not even a kind of player!!!', 'I\m kinda impressed though!'],
        choices: [
            { id: 1, text: 'I am a sock!!!', type: 'Null', weight: 0, next: 100, followUpText: [] } ]
        },

//HUMAN PATH <><><><><><<><><><><><><><><><><><><><><><><><><><><>

    //21 (HUMAN START)
    {
        speaker: 'bot',
        text: ['Look at you go!','The mission begins and you are given your first objective.','You and your friends head out into the night.','What do you do?'],
        choices: [
            { id: 1, text: 'Finding new players to take under my wing!', type: 'H', weight: 1, next: 22, followUpText: [] },
            { id: 2, text: 'Ask to borrow some socks (I forogt mine).', type: 'Z', weight: 1, next: 23, followUpText: [] },
            { id: 3, text: 'Stretch my legs and throwing arm!', type: 'G', weight: 1, next: 25, followUpText: [] },
            { id: 4, text: 'Find a squad to stick with', type: 'Null', weight: 1, next: 24, followUpText: [] },
        ]
    },

    //22 (1_1)
    {
        speaker: 'bot',
        text: ['Aww, how kind of you!', 'The night begins. Its eerily quiet. Suddenly, as you\'re roaming campus, you\'re attacked by the hoarde.','What do you do?'],
        choices: [
            { id: 1, text: 'I run in, throwing socks at lightning speed!', type: 'H', weight: 1, next: 26, followUpText: [] },
            { id: 2, text: 'I make sure everyone in my squad makes it to saftey.', type: 'Z', weight: 1, next: 27, followUpText: [] },
            { id: 3, text: 'RUN! There\'s ZOMBIES!!!!!', type: 'G', weight: 1, next: 28, followUpText: [] }, 
        ]
    },

    //23 (1_2)
    {
        speaker: 'bot',
        text: ['Happens to us all! Let\'s get you some socks.', 'The night begins. Its eerily quiet. Suddenly, as you\'re roaming campus, you\'re attacked by the hoarde.','What do you do?'],
        choices: [
            { id: 1, text: 'I run in, throwing socks at lightning speed!', type: 'H', weight: 1, next: 26, followUpText: [] },
            { id: 2, text: 'I make sure everyone in my squad makes it to saftey.', type: 'Z', weight: 1, next: 27, followUpText: [] },
            { id: 3, text: 'RUN! There\'s ZOMBIES!!!!!', type: 'G', weight: 1, next: 25, followUpText: [] }, 
        ]
    },

    //24 (1_4)
    {
        speaker: 'bot',
        text: ['Saftey in numbers, thats what T Bone always said.', 'The night begins. Its eerily quiet. Suddenly, as you\'re roaming campus, you\'re attacked by the hoarde.','What do you do?'],
        choices: [
            { id: 1, text: 'I run in, throwing socks at lightning speed!', type: 'H', weight: 1, next: 26, followUpText: [] },
            { id: 2, text: 'I make sure everyone in my squad makes it to saftey.', type: 'Z', weight: 1, next: 27, followUpText: [] },
            { id: 3, text: 'RUN! There\'s ZOMBIES!!!!!', type: 'G', weight: 1, next: 25, followUpText: [] }, 
        ]
    },

    //25 (1_3)
    {
        speaker: 'bot',
        text: ['You run, fast and hard. Youre alone. It\'s dark. As you look around, everything is still.', '...','Looking around, you\'re all alone, not a surivor to be seen anywhere.','What do you do now?'],
        choices: [
            { id: 1, text: 'Hide and wait until you see humans and join their group. Facing zombies alone would be too scary.', type: 'H', weight: 1, next: 1000, followUpText: [] }, //SCAREDYCAT
            { id: 2, text: 'Wander around, carefully looking for zombies as you try to find your group.', type: 'Z', weight: 1, next: 28, followUpText: [] },
            { id: 2, text: 'Run facefirst around every corner. What could go wrong?.', type: 'Z', weight: 1, next: 28, followUpText: [] },
            { id: 3, text: 'Hunt for zombies and test my survival skills.', type: 'G', weight: 1, next: 1000, followUpText: [] }, //The Runner
        ]
    },

    //26 (2_1)
    {
        speaker: 'bot',
        text: ['You throw socks like a pro!','You take out 3 zombies and make it to saftey.', 'You and your squad are safe... for now.', 'You get word that the Zombie hoarde is busy across campus.'], 
        choices: [
            { id: 1, text: 'I\'m itching for a fight. Let\'s go find the Zombies! ', type: 'H', weight: 1, next: 1000, followUpText: [] }, //The Death Wish
            { id: 2, text: 'This is our chance! Lets finish our objective!', type: 'Z', weight: 1, next: 27, followUpText: [] },
            { id: 3, text: 'I\'ll go with the Flow, whatever other people want to do.', type: 'G', weight: 1, next: 29, followUpText: [] }, 
            { id: 4, text: 'Search for lost players and other groups to make a plan.', type: 'Null', weight: 1, next: 29, followUpText: [] },
        ]

    },
    //27 (2_2)
    {
        speaker: 'bot',
        text: ['You take out 3 zombies and make it to saftey.', 'You and your squad are safe... for now.', 'You get word that the Zombie hoarde is busy across campus.'], 
        choices: [
            { id: 1, text: 'I\'m itching for a fight. Let\'s go find the Zombies! ', type: 'H', weight: 1, next: 1000, followUpText: [] }, //The Death Wish
            { id: 2, text: 'This is our chance! Lets finish our objective!', type: 'Z', weight: 1, next: 27, followUpText: [] },
            { id: 3, text: 'I\'ll go with the Flow, whatever other people want to do.', type: 'G', weight: 1, next: 28, followUpText: [] }, 
            { id: 4, text: 'Search for lost players and other groups to make a plan.', type: 'Null', weight: 1, next: 28, followUpText: [] },
        ]

    },

    //28 (2_3)
    {
        speaker: 'bot',
        text: ['You found your squad before seeing any zombies.','huh, weird.', 'You get word that the Zombie hoarde is busy across campus.'], 
        choices: [
            { id: 1, text: 'I\'m itching for a fight. Let\'s go find the Zombies! ', type: 'H', weight: 1, next: 1000, followUpText: [] }, //The Death Wish
            { id: 2, text: 'This is our chance! Lets finish our objective!', type: 'Z', weight: 1, next: 27, followUpText: [] },
            { id: 3, text: 'I\'ll go with the Flow, whatever other people want to do.', type: 'G', weight: 1, next: 28, followUpText: [] }, 
            { id: 4, text: 'Search for lost players and other groups to make a plan.', type: 'Null', weight: 1, next: 28, followUpText: [] },
        ]

    },

    //29 (3)
    {
        speaker: 'bot',
        text: ['As you\'re searching for other Humans, you hear music in the distance.', 'Gazzelles! They\'re singing and dancing!'],
        choices: [
            { id: 1, text: 'I join the dance party. All hail the tree!', type: 'H', weight: 1, next: 1000, followUpText: [] }, //Gazelle
            { id: 2, text: 'I dance for a minute before moving on.', type: 'Z', weight: 1, next: 30, followUpText: [] }, 
            { id: 3, text: 'I study them. What makes *them* peaceful?', type: 'Z', weight: 1, next: 30, followUpText: [] }, 
            { id: 4, text: 'I explain what the Gazzelles are to the confused new players.', type: 'Z', weight: 1, next: 30, followUpText: [] }, 
        ]
    },

    //30 (4)
    {
        speaker: 'bot',
        text: ['You leave the Gazzelles behind, but look at your watch.','The night is nearly over. It\'s almost time to head back to old main.'],
        choices: [
            { id: 1, text: 'I run back to Old Main! Maybe theres still time to fight some zombies!', type: 'H', weight: 1, next: 1000, followUpText: [] }, //The Runner
            { id: 2, text: 'II follow the opther players, does this mean we\'re done?.', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //the FreshBlood
            { id: 3, text: 'I look at Discord to see how we did.', type: 'G', weight: 1, next: 1000, followUpText: [] }, //The Lore Master
            { id: 4, text: 'I begin to walk to Old Main, looking for lost players on my way.', type: 'Null', weight: 1, next: 1000, followUpText: [] }, //The Knight

        ]
    },
//ZOMBIE PATH <><><><><><<><><><><><><><><><><><><><><><><><><><><>

    //31 (ZOMBIE START)
    {
        speaker: 'bot',
        text: ['The night begins. You join the other Zombies and are told your objective.', 'You and your hoarde head out into the night.','What do you do next?'],
        choices: [
            { id: 1, text: 'Leave the group and follow the humans, tracking their every move.', type: 'Z', weight: 1, next: 32, followUpText: [] },
            { id: 2, text: 'Go scare the humans!', type: 'H', weight: 1, next: 33, followUpText: [] },
            { id: 3, text: 'Stick with the hoarde...', type: 'G', weight: 1, next: 1000, followUpText: [] }
        ]
    },

    //32 (1_1)
    {
        speaker: 'bot',
        text: ['You follow the humans, watching them from the shadows.','You see them throw socks at each other and laugh.','Such joy from those poor, doomed souls.','They seem distracted. What do you do?'],
        choices: [
            { id: 1, text: 'I sneak closer, going for a tag...', type: 'Z', weight: 1, next: 34, followUpText: [] },
            { id: 2, text: 'I message the Hoarde. They should know this is the perfect time to attack!', type: 'Z', weight: 1, next: 35, followUpText: [] },
        ]
    },

    //33 (1_2)
        {
            speaker: 'bot',
            text: ['I love how panicked they get, its so funny!!!','You see them throw socks at each other and laugh.','Such joy from those poor, doomed souls.','They seem distracted. What do you do?'],
            choices: [
                { id: 1, text: 'I sneak closer, going for a tag...', type: 'Z', weight: 1, next: 34, followUpText: [] },
                { id: 2, text: 'I message the Hoarde. They should know this is the perfect time to attack!', type: 'Z', weight: 1, next: 35, followUpText: [] },
            ]
        },

    //34 (2_1)
    {
        speaker: 'bot',
        text: ['you lunge for the tag, barely making contact with the human before you\'re hit with a sock.','You\'re out for now, but you\'ll be back soon.','The night is still young.','Do you keep hunting or go find the hoarde?'],
        choices: [
            { id: 1, text: 'I keep hunting. No sense in stopping now!', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE KILLER
            { id: 2, text: 'I head back to the Hoarde with my fresh kill', type: 'Z', weight: 1, next: 36, followUpText: [] },
        ]
    },

    //35 (2_2)
    {
        speaker: 'bot',
        text: ['The Hoarde is busy and wants you to head back.'],
        choices: [
            { id: 1, text: 'aww man... I\'ll head back then.', type: 'Z', weight: 1, next: 38, followUpText: [] },
            { id: 2, text: 'I\'ll keep hunting. No sense in stopping now!', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE KILLER
        ]
    },

    //36 (3_1)
    {
        speaker: 'bot',
        text: ['You return to the hoarde, your prize in tow.', 'You log the tag as you walk because you know it makes life easier for the mods.', 'You make it back to the hoarde.','You get word from the harbinger that your mission objective is only blocked by a few humans.', 'What do you do?'],
        choices: [
            { id: 1, text: 'I charge in, yelling a war cry and terrifying the humans.', type: 'Z', weight: 1, next: 37, followUpText: [] }, //THE KILLER
            { id: 2, text: 'I cover my friends, tanking socks to allow them to get closer.', type: 'Z', weight: 1, next: 38, followUpText: [] },
            { id: 2, text: 'I stage a surprise attack with some other Zombies.', type: 'Z', weight: 1, next: 39, followUpText: [] },
            { id: 2, text: 'I ask if they want to party.', type: 'Z', weight: 1, next: 40, followUpText: [] },
        ]
    },

    //37 (4)
    {
        speaker: 'bot',
        text: ['They scream in terror, dropping their socks in surprise.','You and your hoarde make quick work of them.','Well... most of them.', 'One of the humans escapes, running away.'],
        choices: [
            { id: 1, text: 'I chase them down, they can\'t escape!', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE FROG
            { id: 2, text: 'I let them go, allowing them to live to tell the tale to the other humans..', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE CRAB
            { id: 3, text: 'I loop around and hide behind a corner, ready to jump out and get the tag.', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE CHAMEOLON
        ]
    },

    //38 (3_2)
    {
        speaker: 'bot',
        text: ['Nice! Smart tactic! Juliet calls that \"The Chisel and the Hammer\"','You and your hoarde make quick work of them.','Well... most of them.', 'One of the humans escapes, running away.'],
        choices: [
            { id: 1, text: 'I chase them down, they can\'t escape!', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE FROG
            { id: 2, text: 'I let them go, allowing them to live to tell the tale to the other humans..', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE CRAB
            { id: 3, text: 'I loop around and hide behind a corner, ready to jump out and get the tag.', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE CHAMEOLON
        ]
    },

    //39 (3_3)

    {
        speaker: 'bot',
        text: ['You take them by surprise!','You and your hoarde make quick work of them.','Well... most of them.', 'One of the humans escapes, running away.'],
        choices: [
            { id: 1, text: 'I chase them down, they can\'t escape!', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE FROG
            { id: 2, text: 'I let them go, allowing them to live to tell the tale to the other humans..', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE CRAB
            { id: 3, text: 'I loop around and hide behind a corner, ready to jump out and get the tag.', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //THE CHAMEOLON
        ]
    },

    //40 (5)
    {
        speaker: 'bot',
        text: ['The humans freeze, eyeing each other nervously.', 'They lower their socks.','One of them steps closer, bravery filling their expression.','\"What kind of party?\", they ask.'],
        choices: [
            { id: 1, text: 'Oh... you know... a party party!', type: 'Z', weight: 1, next: 41, followUpText: [] },
            { id: 2, text: 'A sock party! You\'re invited!', type: 'Z', weight: 1, next: 41, followUpText: [] }, 
            { id: 3, text: 'Only the coolest party ever!', type: 'Z', weight: 1, next: 41, followUpText: [] },
            { id : 4, text: '*wait for them to get closer*', type: 'Z', weight: 1, next: 41, followUpText: [] },
        ]
    },

    //41 (5_2)
    {
        speaker: 'bot',
        text: ['The Humans slowly move closer, some more nervous than others.', 'The humans are now about 5 feet away.'],
        choices: [
            { id: 1, text: 'I lunge foward, getting the tag!', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //CHAMELEON
            { id: 2, text: 'I turn on music and begin to dance!', type: 'Z', weight: 1, next: 1000, followUpText: [] }, //GAZELLE
        ]
    },

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// 42 GHOST
    {
        speaker: 'bot',
        text: ["You're a ghost!", "How did you even find this website?", "Do you even know what I've been talking about???", "I guess you can just go to class now."],
        choices: [
            { id: 1, text: 'I guess I\'ll just go to class now.', type: 'Null', weight: 0, next: 1, followUpText: [] }, //GHOST
        ]
    },

// 43 LORE MASTER

    {
        speaker: 'bot',
        text: ['Hmmm... lets see.', 'You know everything about the game!','You know the rules, the lore, and the best strategies.','You\'re the one everyone goes to for help.','You\'re the Lore Master!'],
        choices: [
            { id: 1, text: 'I am the Lore Master!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE LORE MASTER
        ]
    },

// 44 GAZELLE

    {
        speaker: 'bot',
        text: ['You must be a Gazelle!','You\'re the life of the party.','You\'re always dancing, singing, and having a good time.','You\'re the Gazelle!'],
        choices: [
            { id: 1, text: 'I am a Gazelle!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE GAZELLE
        ]
    },

//45 THE RUNNER

    {
        speaker: 'bot',
        text: ['You\'re the Runner!','You\'re always on the move.','You never stop, never rest.', 'After all, theres so many more zombies to fight!','More adventure to be had!','You\'re the Runner!'],
        choices: [
            { id: 1, text: 'I am the Runner!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE RUNNER   
        ]
    },

// 46 THE KNIGHT

    {
        speaker: 'bot',
        text: ['You\'re the Knight!','You\'re always looking out for others and taking newbies under your wing.','You\'re the one who makes sure everyone is safe.','Thank you for your service.','You\'re the Knight!'],    
        choices: [
            { id: 1, text: 'I am the Knight!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE KNIGHT
        ]
    },

// 47 THE DEATH WISH

    {
        speaker: 'bot',
        text: ['You\'re the Death Wish!','Wait that sounds mean.','You\'re always looking for a fight.','Always ready to be the one who charges in, no matter the odds.','You\'re the Brave!'],
        choices: [
            { id: 1, text: 'I am the Death Wish!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE DEATH WISH
            { id: 2, text: 'I am the Brave!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE DEATH WISH
        ]
    },

// 48 THE SCAREDY CAT

    {
        speaker: 'bot',
        text: ['You\'re the Scaredy Cat!','You\'re always looking for a place to hide.','I get it, zombies are scary!','You\'re the Scaredy Cat!'],    
        choices: [
            { id: 1, text: 'I am the Scaredy Cat!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE SCAREDY CAT
        ]
    },

// 49 THE FRESH BLOOD

    {
        speaker: 'bot',
        text: ['You\'re the Fresh Blood!','You\'re new to the game.','We\'re so hapy to have you here!','Dont hesitate to ask someone for help!','We all have to leanr the ropes somehow.','You\'re the Fresh Blood!'],
        choices: [
            { id: 1, text: 'I am the Fresh Blood!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE FRESH BLOOD
        ]
    },

// 50 THE KILLER

    {
        speaker: 'bot',
        text: ['You\'re the Killer!','You\'re always looking for your next target.','You\'re the one who takes out the competition, and charges in','no matter how low your odds.','You\'re the Killer!'],
        choices: [
            { id: 1, text: 'I am the Killer!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE KILLER
        ]
    },

// 51 THE FROG

    {
        speaker: 'bot',
        text: ['You\'re the Frog!','You\'re always looking for a way to jump ahead.','You\'re always ready to jump in hands first!','You\'re the one who never lets a target escape.','You\'re the Frog!'],
        choices: [
            { id: 1, text: 'I am the Frog!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE FROG
        ]
    },

//52 THE CRAB

    {
        speaker: 'bot',
        text: ['You\'re the Crab!','You\'re a tank in the heat of battle, always ready to take a hit.','You\'re the one who lets others get the glory,','But we couldn\'t do it without you.','You\'re the Crab!'],
        choices: [
            { id: 1, text: 'I am the Crab!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE CRAB
        ]
    },

// 53 THE CHAMELEON

    {
        speaker: 'bot',
        text: ['You\'re the Chameleon!','You\'re always looking for a way to blend in,', 'and you\'re a master of strategy!','You\'re the Chameleon!'],
        choices: [
            { id: 1, text: 'I am the Chameleon!', type: 'G', weight: 1, next: 1000, followUpText: [] }, //THE CHAMELEON
        ]
    },
]


function addMessage(speaker, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', speaker);
    messageElement.textContent = text;
    document.getElementById('chatbox').appendChild(messageElement);
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}

function showChoices(choices) {
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.classList.add('choice-button');
        choiceButton.textContent = choice.text;
        choiceButton.onclick = () => handleChoice(choice.type, choice.type2, choice.type3, choice.weight, choice.id, choice.next);
        choicesContainer.appendChild(choiceButton);
    });
}

let typingInterval;
let typingDots = 0;

function showTypingDots() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.textContent = 'typing...';
    document.getElementById('chatbox').appendChild(typingIndicator);
    typingIndicator.style.display = 'inline';

    typingDots = 0;

    typingInterval = setInterval(() => {
        typingIndicator.textContent = '.'.repeat(typingDots % 5);
        typingDots++;
    }, 250);
}

function stopTypingDots() {
    clearInterval(typingInterval);
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function displayResult() {
    let resultType = '';

    //Human, Zombie, or Ghost?

    if (scores.H >= scores.Z && scores.H >= scores.G) {
        resultType = 'H';
    }
    if (scores.Z >= scores.H && scores.Z >= scores.G) {
        resultType = 'Z';
    }
    if (scores.G >= scores.H && scores.G >= scores.Z) {
        resultType = 'G';
    }
    
    //if result is H, display "HUMAN"
    if (resultType == 'H') {
        result = 'HUMAN';
    }
    if (resultType == 'Z') {
        result = 'ZOMBIE';
    }
    if (resultType == 'G') {    
        result = 'GHOST';
    }

    // // B, S, or W
    // let topBSW = [];
    // if (scores.B >= scores.S && scores.B >= scores.W) topBSW.push('B');
    // if (scores.S >= scores.B && scores.S >= scores.W) topBSW.push('S');
    // if (scores.W >= scores.B && scores.W >= scores.S) topBSW.push('W');
    // resultType += topBSW[Math.floor(Math.random() * topBSW.length)];

    // // C, P, or D
    // let topGPD = [];
    // if (scores.G >= scores.P && scores.G >= scores.D) topGPD.push('G');
    // if (scores.P >= scores.G && scores.P >= scores.D) topGPD.push('P');
    // if (scores.D >= scores.G && scores.D >= scores.P) topGPD.push('D');
    // resultType += topGPD[Math.floor(Math.random() * topGPD.length)];

    // // A or R
    // let topAR = [];
    // if (scores.A >= scores.R) topAR.push('A');
    // if (scores.R >= scores.A) topAR.push('R');
    // resultType += topAR[Math.floor(Math.random() * topAR.length)];


    const resultsText = {
        GHOST: 'You are a GHOST!',
        ZOMBIE: 'You are a ZOMBIE!',
        HUMAN: 'You are a HUMAN!',
    }

    const resultImages = {
        GHOST: 'ghost.gif',
        ZOMBIE: 'zombie.gif',
        HUMAN: 'human.gif',
    };
    
    //document.getElementById('result-text').textContent = resultType + ' ' + resultsText[resultType];
    /*document.getElementById('result-image').src = resultImages[resultType];
    document.getElementById('result-overlay').style.display = 'flex';*/
    document.getElementById("phone-screen").style.display = "none";
    document.getElementById("result-page").style.display = "flex";
    document.getElementById("result-image").src = "IMG/" + resultImages[resultType];
    document.getElementById("result-image").alt = resultType + resultsText[resultType];
}

/*function closeResult() {
    document.getElementById('result-overlay').style.display = 'none';
    setTimeout(() => {
        addMessage('bot', 'Would you like to play again?');
        showChoices([
            { text: 'Yes, let’s go!', type: 'restart' },
            { text: 'No, thanks.', type: 'exit' }
        ]);
    }, 500);
}*/

function handleChoice(type, type2, type3, weight, id, nextIndex) {
    const dingSound = document.getElementById('dingSound');
    dingSound.play();
    const chosenOption = dialogue[currentMessageIndex].choices.find(choice => choice.type === type && choice.id === id);
    scores[type] += weight;
    scores[type2] += weight;
    scores[type3] += weight;



    updateDebugScores();
    currentMessageIndex = nextIndex;
    document.getElementById('choices').innerHTML = '';
    addMessage('user', chosenOption.text, false);

    if (chosenOption.followUpText && chosenOption.followUpText.length > 0) {
        chosenOption.followUpText.forEach((followUp, index) => {
            setTimeout(() => {
                addMessage('user', followUp);
            }, (index + 1) * 1000);
        });
    }

    setTimeout(() => {
        showTypingDots();

        setTimeout(() => {
            stopTypingDots();
            const popSound = document.getElementById('popSound');
            popSound.play();
            if (currentMessageIndex == 0 || currentMessageIndex == 2 || currentMessageIndex >=3 ) {
                const header = document.getElementById("header");
                header.textContent = 'ZomBot <3';
                header.style.color = 'var(--4-color)';
                header.style.backgroundColor = 'var(--6-color)';
                const phoneScreen = document.getElementById("phone-screen");
                phoneScreen.style.backgroundColor = 'var(--6-color)';
            }

            if (currentMessageIndex >= 6) {
                const header = document.getElementById("header");
                header.textContent = 'ZomBot <3';
                header.style.color = 'var(--4-color)';
            }

            if (currentMessageIndex < dialogue.length) {
                const currentDialogue = dialogue[currentMessageIndex];
                currentDialogue.text.forEach((text, index) => {
                    setTimeout(() => {
                        addMessage(currentDialogue.speaker, text);
                    }, index * 1000);
                });
                setTimeout(() => {
                    showChoices(currentDialogue.choices);
                }, currentDialogue.text.length * 1000);

            }
            else {
                triggerIconShower();
                displayResult();
            }

        }, 1500);
    }, (chosenOption.followUpText.length * 1000) + 500);
}



function restartQuiz() {
    document.getElementById("result-page").style.display = "none";
    document.getElementById("start-page").style.display = "flex";
    currentMessageIndex = 0;
    scores.B = scores.S = scores.W = scores.G = scores.P = scores.D = scores.A = scores.R = 0;
    document.getElementById('chatbox').innerHTML = '';
    document.getElementById('choices').innerHTML = '';
    const header = document.getElementById("header");
    header.textContent = 'ZomBot <3';
    header.style.color = '#fff';
    header.style.backgroundColor = 'rgb(22, 22, 22)';
    const phoneScreen = document.getElementById("phone-screen");
    phoneScreen.style.backgroundColor = 'rgb(22, 22, 22)';
    startConversation();
}

function startConversation() {

    addMessage('bot', dialogue[0].text);
    showChoices(dialogue[0].choices);

}

function updateDebugScores() {
    const debugScoresElement = document.getElementById('debug-scores');
    const formattedScores = `
    ${currentMessageIndex+1}
B: ${scores.B}, S: ${scores.S}, W: ${scores.W},
G: ${scores.G}, P: ${scores.P}, D: ${scores.D}, 
A: ${scores.A}, R: ${scores.R}`;
    debugScoresElement.textContent = formattedScores.trim();
}




function share() {
    const link = window.location.href;
    
    navigator.clipboard.writeText(link)
        .then(() => {
            alert('Link copied to clipboard!');
        })
        .catch(err => {
            alert('Failed to copy the link: ' + err);
        });

    html2canvas(document.body).then(canvas => {
        const screenshot = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = screenshot;
        downloadLink.download = 'myresult.png';
        downloadLink.click();
    });
}



function triggerIconShower(event) {
    for (let i = 0; i < 15; i++) {
        const icon = document.createElement('div');
        icon.classList.add('icon');

        const iconContent = Math.random() > 0.5 ? '♥' : '★';
        icon.textContent = iconContent;


        if (iconContent === '♥') {
            icon.classList.add('heart');
        }
        else {
            icon.classList.add('star');
        }


        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;


        document.body.appendChild(icon);


        setTimeout(() => {
            icon.remove();
        }, 3000);
    }
}

startConversation();