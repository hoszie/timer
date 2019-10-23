const arg = process.argv.slice(2);

const timer = function(number) {
  if(isNaN(number) || number <= 0) {
    return;
  } 
  setTimeout(() => {
    process.stdout.write("\x07"); 
  }, number * 1000)
}

timer(arg);

for (let i = 0; i < arg.length; i ++) {
  timer(arg[i]);
}
