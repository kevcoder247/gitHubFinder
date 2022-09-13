//Initialize GitHub
const github = new GitHub;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input Event Listener
searchUser.addEventListener('keyup', (e) =>{
    //Get input Text
    const userText = e.target.value;

    if(userText !== ''){
        //Make http Call
        github.getUser(userText)
        .then(data => {
           if(data.profile.message === 'Not Found'){
            //Show Alert


           }else{
            //Show Profile

           }
        })
    }else{
       //Clear Profile 

       
    }
});