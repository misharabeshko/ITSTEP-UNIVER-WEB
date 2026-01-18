function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) count++;
    }

    return count;
}

function secondLargest(arr) {
    const unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}

function isAnagram(str1, str2) {
    const normalize = str =>
        str.toLowerCase().split('').sort().join('');

    return normalize(str1) === normalize(str2);
}

function twoSum(arr, target) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(arr[i], i);
    }
}

function isPalindrome(str) {
    const clean = str.toLowerCase();
    return clean === clean.split('').reverse().join('');
}

function toRoman(num) {
    const romans = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    for (let item of romans) {
        while (num >= item.value) {
            result += item.symbol;
            num -= item.value;
        }
    }

    return result;
}

console.log(`toRoman(1994): ${toRoman(1994)}`)

function convert() {
    const value = document.getElementById("numberInput").value;
    document.getElementById("result").textContent = toRoman(Number(value));
}

console.log(`countVowels("Hello World"):  ${countVowels("Hello World")}`)
console.log(`secondLargest([10, 40, 30, 20, 50]): ${secondLargest([10, 40, 30, 20, 50])}`)
console.log(`isAnagram("listen", "silent"): ${isAnagram("listen", "silent")}`)
console.log(`twoSum([2, 7, 11, 15], 9): ${twoSum([2, 7, 11, 15], 9)}`)
console.log(`isPalindrome("racecar"): ${isPalindrome("racecar")}`)
