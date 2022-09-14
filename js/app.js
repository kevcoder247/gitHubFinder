//Initialize GitHub
const github = new GitHub;

//Initialize UI
const ui = new UI;

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
            ui.showAlert('User not found', 'alert alert-danger')

           }else{
            //Show Profile
            ui.showProfile(data.profile)
           }
        })
    }else{
       //Clear Profile 
        ui.clearProfile();

    }
});