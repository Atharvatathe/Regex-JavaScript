//UC1

class EmailRegex{

    get email(){
        return this._email;
    }

    set email(email){
        let emailRegex = RegExp('^[a-zA-z0-9]+$');
        if(emailRegex.test(email))
            this._email = email; 
        else throw 'Wrong Email';
      }
    
      toString(){
        return "Email: " +this._email;
    }
}


let emailreg = new EmailRegex();
try{
emailreg.email = "abc";
console.log(emailreg.toString());
}catch (e){
    console.error(e);
}