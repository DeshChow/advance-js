const nums = [1,2,3,4,5,6];
const part = nums.slice(2,5);
console.log(part);
console.log(nums);
const removed = nums.splice(2,3,5);
console.log(removed);
console.log(nums);

const together = nums.join(" ");
console.log(together);