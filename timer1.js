let args = process.argv.slice(2);

const setAlarm = function(args) {
  for (let i = 0; i < args.length; i++) {
    const delay = parseInt(args[i]) * 1000;
    if (typeof delay === 'number' && delay >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    }
  }
};

setAlarm(args);

// CODE REVIEW NOTES 
// typeof doesn't convert the value before comparison. javascript typeof '1' === 'number' // false
// You should pass the result of the parseInt function instead. javascript const delay = parseInt(args[i]);
// if (typeof delay !== 'number' && delay >= 0) { setTimeout(() => { ... }, delay * 1000); The delay variable
// is declared inside the for loop because the variable is not used outside the loop.


// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

// Edge cases
/*
For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/