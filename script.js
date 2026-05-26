const button = document.querySelector("button")
const heading = document.querySelector("h1")
const paragraph = document.querySelector("p")
//1.Take the button and wait for a prompt using the addEventListener 
button.addEventListener("click", function() {
//2.Waiting on promts to be triggered using "Click"
//3.When the promt is triggered, a name will be asked
    const name = prompt("What is your name?");
//4.The heading will change due to textContent and will show "Hi, (name)"
    heading.textContent = `Hi, ${name}`;
//5.Console log allows us to see the output in the console via inspect
    console.log("The button has been clicked")
button.textContent = "Started"
})
paragraph.addEventListener("click", function() {
        const mood = prompt("How are we feeling today?");
        paragraph.textContent = `We are feeling ${mood} today`;
        console.log(`The user has stated that they are feeling ${mood} today`);
})