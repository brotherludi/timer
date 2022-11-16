function timer(time) {
  // if (typeof time !== 'number') {
  //   return console.log("🚨Plase input a number!")
  if (time < 0) {
    return console.log("🚨Plase input a positive number!")
  } else {
    //console.log("timer", time)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
}

const userinput = process.argv.slice(2)
//console.log(userinput)
for (const timeValue of userinput) {
  //use for of because we want loop through array of time like: node timer1.js 10 3 5 15 9
  let y = isNaN(parseInt(timeValue)) //convert string number to number
  if (y) {
    return console.log("🚨Plase input a number!")
  }
  const timeConverted = Number(timeValue + "000")
  timer(timeConverted)
}

//const timeValue = Number(process.argv[2]+"000")
// timer(timeValue)

//timer(3000)
//timer("hello")
//timer(-3)
//timer()
//timer(false)