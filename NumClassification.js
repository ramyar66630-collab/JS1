let x = -10;

if(x > 0)
{
    console.log('positive');
}
else if(x < 0)
{
    console.log('Negative');

}
else{
    console.log('Zero');
}

//leap year

let year = 2004;

//divisible by 4
//divisible by 100? divisible by 400.

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log('Leap year');
        } else {
            console.log('Not a leap year');
        }
    } else {
        console.log('Leap year');
    }
} else {
    console.log('Not a leap year');
}