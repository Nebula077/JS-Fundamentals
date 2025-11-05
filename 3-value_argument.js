const args = process.argv.slice(2)[0];

if (args) {
    console.log(args);
}
else {
    console.log("No argument");
}