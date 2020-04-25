// 4th part

$(`div`).css(`background`,`purple`);



// From the 1st part to the 3rd


console.log("JavaScript is working")
let colors = ["orange", "green", "blue", "purple"]
let post = {
    title: "My post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First comment",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 222
}];

console.log(colors);
console.log(post);

let age = 19;

if (age > 18) {
console.log("you are an adult");
} else {
    console.log("you are a kid");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

let greeter = name => {
    console.log(`Hello, ${name}`);
    if (name === "Adam") {
        console.log("he's an adult");
    }
}
greeter("Adam");
greeter("Eva");
greeter("kdokoliv");

console.log(colors);

let myFunction = x => {
    console.log(x);
}

colors.forEach(color => {
    console.log(color);
});
    
