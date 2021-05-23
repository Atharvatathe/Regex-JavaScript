//UC2
class Pincode{

    get pin(){
        return this._pincode;
    }

    set pincode(pincode){
        let pinRegex = RegExp('^[a-zA-Z][0-9]{6}$');
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
pincodeRegex.pincode = "A400088";
console.log(pincodeRegex.toString());
}catch (e){
    console.error(e);
}