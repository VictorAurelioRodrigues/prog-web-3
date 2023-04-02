function average(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}
