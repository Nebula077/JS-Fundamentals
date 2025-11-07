const args = process.argv.slice(2);
if (!isNaN(args[0])) {
    console.log("My Number: " + parseInt(args[0]));
} else if (isNaN(args[0])) {
    args[0] = parseInt(args[0]);
    console.log("My Number: " + parseInt(args[0]));
} else {
    console.log("Not a Number");
}