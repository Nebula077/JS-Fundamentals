const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('1');
} else {
    const n = parseInt(args[0]);
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
}