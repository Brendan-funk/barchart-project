const drawBarChart = function(data, options, element){
  let max = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i]>max){
      max = data[i];
    }
  }
  const scale = Math.floor(max/data.length);
};
