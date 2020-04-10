let x,y,z,r,s;       /* Declaring a number of variables. It is good practice to 
                        declare the variables first (Global convention) */
var Users = {
    name: 'valanthonio_marie',
    password: 'google',
}

function sub_button() {
    x = document.getElementById('username').value;  

    y = document.getElementById('passcode').value;

    z = document.getElementById('email').value;

    r = document.getElementById('error').innerHTML;

    s = document.getElementById('display').innerHTML;

        if (x != null && y != null && z != null){

/*Error message when both username and password input are empty. Comes first possibility*/
          if (x.length == 0 && y.length == 0) { 
             r = ("Please type in your username and password"); 
               document.getElementById('error').innerHTML = r;
          } 
/*Error message when both email input are empty. */
        if (z.length == 0 || z.length < 6) { 
            r = (" *Invalid email. Must be at least 6 chars"); 
            document.getElementById('error').innerHTML = r;

/*Error message when both username and password input are invalid.*/                                                                
         }else if (x != Users.name && y != Users.password){
             r = ('Sorry, your are not on our database');
               document.getElementById('error').innerHTML = r;

/*Error message when either username or password input valid.*/
         }else if (x != Users.name || y != Users.password){
             r = ('Invalid username or password');
              document.getElementById('error').innerHTML = r;

/*Display when username, email and password input are valid.*/
        }else if (x === Users.name && y === Users.password && z === User.email ){
            document.getElementById('error').innerHTML = null;
             s = ("Sucessful " + x + '!'+ '<br>' + "Your account is now activated. ");
              document.getElementById('display').innerHTML = z;
              style.backgroundColor = style.color = "green";
        }    
        
    }

}