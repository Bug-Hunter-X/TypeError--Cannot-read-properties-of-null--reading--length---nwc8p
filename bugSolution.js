function foo(x) {
  if (x === null || typeof x !== 'object' || x.length === undefined) {
    return 0; // Handle null, non-objects, and objects without length
  }
  return x.length;
}

//More robust handling of different input types
function bar(x){
  if(x === null || x === undefined) return 0; //handle null and undefined
  if(Array.isArray(x)) return x.length;
  if(typeof x === 'string') return x.length;
  if(typeof x === 'object' && x.length !== undefined) return x.length;
  return 0; //handle other cases
}