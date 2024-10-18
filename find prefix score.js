const findPrefixScore = (nums) => {
  let sum = 0;
  let max_value = nums[0];
  let res = [];

  nums.forEach((curr) => {
    //se establece el maximo valor entre la iteracion actual y la anterior
    max_value = Math.max(max_value, curr);
    //se actualiza la variable para sumar el valor actual y el valor maximo
    sum += max_value + curr;
    //se pushea la suma al resultado
    res.push(sum);
  });

  return res;
};

console.log(findPrefixScore([2, 3, 7, 5, 10])); //output [4,10,24,36,56]
