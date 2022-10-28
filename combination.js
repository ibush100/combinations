const combination = (sentence) => {
  
    const swap = {X: ['0', '1']}
    const arr = sentence.split('');
    const arrays = generate(arr, swap);
    return arrays.map(subarray => subarray.join(''));
  };
  
  const generate = (arr, swap) => {
    if (arr.length === 0) return [[]];
    
    const firstChar = arr[0];
    const remaining = arr.slice(1);
    if (firstChar in swap) {
      const result = [];
      const subarrays = generate(remaining, swap);
      for (let char of swap[firstChar]) {
        result.push(...subarrays.map(subarray => [ char, ...subarray ]));
        
      }
      return result;
    } else {
      const subarrays = generate(remaining, swap);
      return subarrays.map(subarray => [ firstChar, ...subarray ]);
    };
  };
  
  

  module.exports = combination