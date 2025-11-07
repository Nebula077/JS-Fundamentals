const args = process.argv.slice(2);
const count = parseInt(args[0]);
if (isNaN(count)) {
    console.log('Missing size');
} else {
    for (let i = 0; i < count; i++) {
        let line = '';
        for (let j = 0; j < count; j++) {
            line += 'X';
        }
        console.log(line);
    }
}