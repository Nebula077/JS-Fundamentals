const args = process.argv.slice(2);

// Expect exactly two arguments. Convert them to numbers and print the sum.
if (args.length !== 2) {
    console.log('NaN');
} else {
    const a = Number(args[0]);
    const b = Number(args[1]);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log('NaN');
    } else {
        console.log(a + b);
    }
}

