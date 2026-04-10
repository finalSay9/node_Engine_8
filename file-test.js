const fs = require('fs');

console.log("1. Starting the file operation...");

// Writing a file (Filename, Content, Callback function)
fs.writeFile('message.txt', 'Hello! This file was created by Node.js', (err) => {
    if (err) throw err;
    console.log("3. The file 'message.txt' has been saved!");
    
    // Now let's read it back
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("4. Content of the file:", data);
    });
});

console.log("2. I run while the file is being written!");
