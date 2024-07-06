let current_user : string[] = ["saba" , "admin" , "huzaifa" , "raza" , "simra"];

let new_user : string[] = ["fahad" , "hussain" , "admin" , "saba" , "faizi"];

new_user.forEach((newUser) => {
    if(
        current_user.some(
    (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will  need to enter a new username.`);

    }else{
        console.log(`${newUser} is available. `);
    }
});

