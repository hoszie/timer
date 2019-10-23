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
<<<<<<< HEAD
  console.log("setting timer for " + arg + " seconds");
}
=======
  timer(arg[i]);
}
>>>>>>> 3e92b6416e585679ced32cda7592b1a958766723
