// This is a simple script to show Node in action
console.log("Hello from Node.js!");

// Using a built-in Node object to see info about your computer
console.log("Your OS platform is:", process.platform);
console.log("Node version running:", process.version);

// A simple timer to show the Event Loop at work
setTimeout(() => {
    console.log("This ran after 2 seconds!");
}, 2000);

console.log("I run immediately, even before the timer!");
