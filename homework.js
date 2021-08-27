// WELCOME TO THE STRIVE TEAM GENERATOR!

// In this app you will generate teams and assign the participants to them.
// You will use the Bootstrap components for the elements of your app.

// The features are the following:
// - The user should be able to add a list of names, find a way to get the user input and fill a list with the new name.
// - The user should be able to set the number of teams he wants, so that they will be generated. A team is just another list to be displayed.
// - An "Assign" button will be required in order to launch the team generation functionality.
// - Every time the user clicks on the "Assign" button, a random name is placed in a team and removed from the initial list.
// - Each team should be inside a "column" to be responsive.
// - [EXTRA] Create a button to remove a user from a team, and putting him back in the main list, waiting to be reassigned.
// - [EXTRA] Create a button to reset the state of the app.





// Add names to waiting list
let players = []


function addPlayers(){
    let newList = document.querySelector(`#lname`).value
    let teamNode = document.createElement(`div`)
    teamNode.innerHTML = newList
    teamNode.classList.add('players')
    document.getElementById('list').appendChild(teamNode)
    document.getElementById('lname').value = ''
    players.push(teamNode.innerHTML)
    console.log(players)
    
}




// Add number for teams 
function createTeams() {
     let newTeam = document.getElementById('teamid').value
    
     for (let i = 0; i < newTeam.length; i++) {
         let team = document.createElement('div')
         team.classList.add('col')
         team.classList.add('team')
         document.getElementById('teamrow').appendChild(team)
         document.getElementById('teamid').value = ''
         team.innerHTML = 'Team' + [i]
         
     }

    
}

// Assign random person to a list
function assignRandom(){
    
}















