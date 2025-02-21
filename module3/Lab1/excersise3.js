//Which of the following console.log messages will print? Why?


    // if (0) console.log('#1 zero is true')
    // if ("0") console.log('#2 zero is true')
    // if (null) console.log('null is true')
    // if (-1) console.log('negative is true')
    // if (1) console.log('positive is true')


if (0) console.log('#1 zero is true')  //will not log, 0 is a falsy value
if ("0") console.log('#2 zero is true') // will log this is a string that has a value.
if (null) console.log('null is true') //will not log, null is a falsy value
if (-1) console.log('negative is true') // will log, -1 is a true value
if (1) console.log('positive is true') // will log, non zero numbers are truthy