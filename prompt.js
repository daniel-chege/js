//1. Password Validation:
 
//Imagine a program where users create accounts. You want to make sure their passwords are strong and not easily guessed. This function checks if a password follows these guidelines:
 
//It cannot be blank (empty).
//It cannot contain repeated characters in a row (like "1111" or "aaaaa" or "Jjjj").
//Optionally, you can add a list of common words that users shouldn't use as passwords (like "password" or "123456").
//let first = prompt("enter password");
//console.log(first);
function valid( empty, easy[]){
    if (empty.length===0){
        return false;
    }
    for (i=0; i<pass.length-1; i++){
        if (easy[i]===easy[i+1]){
            return false;
        }
        }
    if (common.include(pass.tolowerCase)){
        return false;
    }
    return true;
}
let easy =["justice", "password"];
let empty ="hello ";
if (valid( empty, easy[])){
    console.log("valid password");
    };
    else ("invalid password");
