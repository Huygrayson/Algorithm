var a0 = [1, 1];
function fib(nthPosition){
  // add whatever parameters you deem necessary - good luck!  
  if(nthPosition <= 2){
      return 1;
  }
  else{
      for(var i = 2; i < nthPosition; i++){
          a0.push(a0[i-1] + a0[i-2]);
      }
      console.log(a0);
      return a0[nthPosition - 1];
  }
};
console.log(fib(28));