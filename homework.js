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





// function changeUserName(){
//     const user = document.querySelectorAll('li')

//     for (let i = 0; i < user.length; i++) {
//         user[i].innerText = 'Thank you Jesus'
//     }
// }
// const userInput = document.getElementById('lname').value

// function addNewPlayer(){
//     const newPlayer = document.querySelectorAll('li')
//       let name = document.createElement('div')
//       name.innerHTML = userInput.value
//       document.getElementsByTagName('body')[0].appendChild(name)
//     for (let i = 0; i < newPlayer.length; i++){
//         newPlayer[i].appendChild(name)
        
//     }
// }



function makeNewList(){
      let newList = document.querySelector(`#lname`)
      let newTeam = document.createElement(`li`)
      newTeam.innerHTML = newList.value
       document.getElementsByTagName(`body`)[0].appendChild(newTeam)

}

// function team(){
//     let newList = document.querySelector(`#lname`)
//     let teamNode = document.querySelectorAll(`li`)

//     for (let i = 0; i < teamNode.length; i++){
//         teamNode[i].innerHTML = newList.value
//     }  
// }


function addPlayers(){
    let newList = document.querySelector(`#lname`)
    let teamNode = document.createElement(`div`)
    document.getElementsByTagName('body')[0].appendChild(teamNode)
    teamNode.innerHTML = newList.value
}







// function addToTeam(){
//     let newList = document.querySelector(`#lname`)
//        let newTeam = document.createElement(`li`)
//        document.getElementById(`col-4`)[0].appendChild(newTeam)
//        newTeam.innerHTML = newList.value
// }


// window.onload = () => {
    

// }