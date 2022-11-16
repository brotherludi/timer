# timer

###Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

Example usage:

node timer1.js 10 3 5 15 9 

This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

###System Sound (Beep / Ding)

A quick Google Search of "node system beep" shows that in order to make our machine perform a system sound, we can simply output the following special character to stdout.
```javascript
process.stdout.write('\x07');
```

For this app, we can think of at least these three:

*No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
*An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
*An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
