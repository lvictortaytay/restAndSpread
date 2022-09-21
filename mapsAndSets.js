
//What does the following code return?

new Set([1,1,2,2,3,4])
//[1,2,3,4]

// -----------------------------------------------------------------------

//What does the following code return?

const newArr = [...new Set("referee")].join("")
console.log(newArr)
//ref


// -----------------------------------------------------------------------

//What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{arr(3) => true}
//{arr(3) => false}
console.log(m)

// -----------------------------------------------------------------------


//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length


// -----------------------------------------------------------------------


//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char){
    return "aeiou".includes(char);
}


function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCasedChar = char.toLowerCase()
        if(isVowel(lowerCasedChar)){
            if(vowelMap.has(lowerCasedChar)){
                vowelMap.set(lowerCasedChar , vowelMap.get(lowerCasedChar) + 1)
            }
            else{
                vowelMap.set(lowerCasedChar , 1)
            }
        }
      
    }
    return vowelMap;

}
