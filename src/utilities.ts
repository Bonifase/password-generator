export function generatePassword(passLenght: number){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/';
    var charactersLength = characters.length;
    for ( var i = 0; i < passLenght; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}