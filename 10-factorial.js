const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('1');
} else {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    const n = parseInt(args[0]);
    const result = factorial(n);
    console.log(result);
}