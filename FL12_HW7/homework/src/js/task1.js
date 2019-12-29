// Your code goes here

const users = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
    },
    userEmail = prompt('Please, enter your email'),
    minMailLength = 5

let userPassword,
    changePassword = false;


if (users[userEmail]) {
    userPassword = prompt('Please, enter your password');
    if (users[userEmail] === userPassword) {
        if (confirm('Do you want to change your password?')) {
            userPassword = prompt('Please, enter your old password');
            if (users[userEmail] === userPassword) {
                let userNewPassword = prompt('Please, enter your new password');
                if (userNewPassword.length > minMailLength) {
                    userNewPassword === prompt('Please, enter your new password again') ? 
                    alert('You have successfully changed your password'): 
                    alert('ou wrote the wrong password');
                }else if(!userNewPassword){
                    alert('Canceled')
                }else{
                    alert('It’s too short password. Sorry.')
                }
            } else if(!userPassword){
                alert('Canceled');
            }else{
                alert('Wrong password');
            }
        }else{
            alert('You have failed the change');
        }
    }else if (!userPassword) {
        alert('Canceled');
    }else {
        alert('Wrong password');
    }
}else if (!userEmail) {
    alert('Canceled');
}else if (userEmail.length < minMailLength) {
    alert("I don't know any emails having name length less than 5 symbols");
}else{
    alert('I don’t know you');
}