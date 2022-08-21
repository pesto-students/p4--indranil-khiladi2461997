function add(a,b){
  return a + b;
  }

const memoize = (add) => {
  let cache = {};
  return (...args) => {

    let n = JSON.stringify(args);
    if (n in cache) {
      console.log('Fetching from cache');
      console.log(cache[n]);
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = args[0]+args[1];
      cache[n] = result;
      return result;
    }
    /*
    if (r in cache )
      
      console.log('Fetching from cache');
      
    }
    else {
      console.log('Calculating result');
      result = 
      cache.r = result;
    console.log(cache[r]);
    return cache[*/
  }
}
const memoriesAdd = memoize(add);

memoriesAdd(100,100);
memoriesAdd(100);
memoriesAdd(100,200);
memoriesAdd(100,100);
