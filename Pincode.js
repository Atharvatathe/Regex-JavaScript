//UC2
class Pincode{

    get pin(){
        return this._pincode;
    }

    set pincode(pincode){
        let pinRegex = RegExp('^[0-9]{6}[a-zA-Z]$');
        if(pinRegex.test(pincode))
            throw 'Wrong Pin Code';
        else 
            this._pincode = pincode;  
    }
    toString(){
        return "Pincode: " +this._pincode;
    }
}


let pincodeRegex = new Pincode();
try{
pincodeRegex.pincode = "400088B";
console.log(pincodeRegex.toString());
}catch (e){
    console.error(e);
}