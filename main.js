// for(let bot = 10; bot >= 0; bot--) {
//     console.log(bot);
    
// }

const numbers = [2, 4, 9, 10, 45, 67, 8, 90]
const juft =[];
const toq = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        juft.push(numbers[i]);
    }else {
        toq.push(numbers[i]);
    }
}
console.log(`${numbers} 'boshlanishidagi array'`);
console.log(`${juft} juft sonlarga ajratilgan array`);
