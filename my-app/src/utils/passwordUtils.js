export const generatePassword = ({length, hasUpper, hasLower, hasNumber, hasSymbols}) => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';   
    const symbols = '!@#$%^&*()_+{}:"<>?|[];\',./';
    let all = '';

    if(hasUpper) all += upper;
    if(hasLower) all += lower;
    if(hasNumber) all += numbers;
    if(hasSymbols) all += symbols;

    if(!all)return "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }

    return password;
};