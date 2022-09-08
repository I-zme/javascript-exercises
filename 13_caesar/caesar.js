/*PSEUDOCODE
        #case sensitive #keep punctuation

 identify character as letters
    IF( letter) 
        convert to ascii code
        add shiftNumber to ascii code
        convert back to letter
        replace original letter with converted letter
    ELSE iterate next character
 */



const caesar = function(myString, shiftNumber) {
    let convertedString='';
    while(shiftNumber>26){
        shiftNumber-=26;
    }
    for(let i=0; i<myString.length;i++){
        if(myString[i].match(/[a-zA-Z]/)){
            let asciiNumber = myString.charCodeAt(i);
            let asciiIndex = asciiNumber+shiftNumber;
            
            if(myString[i]>"Z"){
                asciiIndex = checkIndexOK(asciiIndex, "a", "z");
            }
            else{
                asciiIndex = checkIndexOK(asciiIndex, "A", "Z");
            }

            let convertedLetter = String.fromCharCode(asciiIndex);
            convertedString+=convertedLetter;
        }
        else{
            convertedString+=myString[i];
        }
    }

    function checkIndexOK(asciiIndex,a,z){
        if(asciiIndex <a.charCodeAt()){
                    asciiIndex = z.charCodeAt() - (a.charCodeAt() - asciiIndex)+1;}
        else if(asciiIndex > z.charCodeAt()){
            asciiIndex = a.charCodeAt() + (asciiIndex - z.charCodeAt())-1;
        }
        return asciiIndex
    }

    return convertedString
};

// Do not edit below this line
module.exports = caesar;
