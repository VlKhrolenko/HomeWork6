//Вам необхідно написати функцію doubleLetter(str),
// яка приймає на вхід рядок і повертає новий рядок,
// у якому кожен символ повторюється двічі hello ⇒ hheelllloo.

//1 вариант ------------------------------------------------
function doubleLetter(str){
    let double = '';
    for(let i = 0 ; i < str.length; i++ ){
        double += str[i] + str[i]
    }
    return (double)
}
const str1 = "Double"
const str2 = doubleLetter(str1)
console.log(str1,str2)

//2 вариант ------------------------------------------------

function doubleLettersV2(str2){
    return str2.split('').map(char => char + char).join('');
}
const str3 = "Double2"
const str4 = doubleLettersV2(str3)
console.log(str3,str4)

//Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, що є довгим рядком,
// який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, четвертим параметром є буремний «прапор»,
// чи додавати символи зліва або справа(за замовчуванням). Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін.
// Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.


function padString(str, length, symbol, toLeft= false){
    if(toLeft){
        return str.padStart(length,symbol)
    }else {
        return str.padEnd(length, symbol)
    }

}
console.log(padString('dima',7,"*",))


//Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату «camelCase»

function camelCase(str, separator) {
    let words = str.split(separator);
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('')
}

console.log(camelCase("one two three four five", ' '))
