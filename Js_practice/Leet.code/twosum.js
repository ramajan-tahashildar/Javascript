 function twoSum(nums, target){
    const numMap = new Map(); // Create a map to store the difference and index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the required complement
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return the indices if found
        }   
        numMap.set(nums[i], i); // Store the current number with its index
    }
    return []; // Return an empty array if no solution is found
}
// Example usage
const nums = [3, 2, 4];
const target = 6;
const result = twoSum(nums, target);
console.log(result); // Output: [1, 2]
