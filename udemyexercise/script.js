var database = [
    {
        username: "sri",
        password: "zen"
    },
    {
        username: "ram",
        password: "zen1"
    },
    {
        username: "sharma",
        password: "zen2"
    }
];

var newsfeed = [
    {
        username: "ram",
        timeline: "So tired from all that learning",
    },
    {
        username: "Alexa",
        timeline: "JS is so cool"
    },
    {
        username: "mitch",
        timeline: "JS is cool"
    }
    ];


function isUserValid(username, password){
    for (var i=0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return true;
    }
} 
    return false;
}

function signIn(username, password){
    if (isUserValid(username, password)){
        console.log(newsfeed);
    }
        
        else {
            alert("wrong crendtial");
        }
    }
var userNamePrompt = prompt("Username");
var passwordPrompt = prompt("password");

signIn(userNamePrompt, passwordPrompt);



    //     if (user === database[0].username && 
//         pass=== database[0].password){
//     console.log(newsfeed);
// }
//     else
//     {
//     alert("wrong crendtial");
//}



// var todos = [
//     "keep the room clean",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];
// var todosLength = todos.length;
// for (var i=0; i<todosLength; i++){
//     console.log(i);
// }


// //FOR EACH
// todos.forEach(function(i){
//     console.log(i);
//})


//wHILE
// var counterOne = 10;
// while (counterOne > 10) {
//     console.log("while", counterOne);
//     counterOne--;
// }


// DO
// var counterTwo = 10;
// do {
//     console.log("do while", counterTwo);
//     counterTwo--;
// } while(counterTwo > 10)