//UC1
class Pincode{

    get pin(){
        return this._pincode;
    }

    set pincode(pincode){
        let pinRegex = RegExp('^[0-9]{6}$');
        if(pinRegex.test(pincode))
            this._pincode = pincode;
        else throw 'Wrong Pin Code';  
    }
    toString(){
        return "Pincode: " +this._pincode;
    }
}


let pincodeRegex = new Pincode();
try{
pincodeRegex.pincode = "400088";
console.log(pincodeRegex.toString());
}catch (e){
    console.error(e);
}