// node timer1.js 10 3 5 15 9 

// console.log(process.stdout.write('\x07'));
// process.stderr.write("\007");
// function beepNow () {
//   process.stdout.write('\x07')
// }
// console.log(beepNow())
// console.log('\u0007')

// function alertTerminal(){
//   console.log("\007");
// }
// alertTerminal();
// console.log(navigator.vibrate(1000));

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