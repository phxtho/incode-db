const fs = require('fs')
const readline = require('readline');

const db = []

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// listen to keystrokes
process.stdin.on('keypress', (key, data) => {
    // ctrl + c to exit
    if (data.ctrl && data.name === 'c') {
        process.exit();
    } else {
        // append db
        db.push(data.name)

        fs.readFile(__filename, 'utf8', (err, data) => {
            // search and replace db
            re = /db = \[(.*?)\]/
            data = data.replace(re, `db = [${db}]`)

            // write file
            fs.writeFile(__filename, data, () => { })
        })
    }
});

console.log('Press a key, ctrl+c to exit');