const fs = require('fs');

console.log('starting the file operation process ..')

fs.watchFile('message.txt', 'hello this ,message was writen by nodejs', (err) => {
    if (err) throw err,
    console.log('the file message.txt has been saved')

    fs.readFile('message.txt', 'utf8', (err, data) => {
        if(err) throw err,
        console.log('contents of the file', data)
    })
})