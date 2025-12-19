const form = document.getElementById("letterForm");
const lettersContainer = document.getElementById("lettersContainer");

// load the letters when the page opens
let letters = JSON.parse(localStorage.getItem("letters")) || [];
displayLetters();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const recipient = document.getElementById("recipient").value;
    const text = document.getElementById("letterText").value;

    const letter = {
        recipient: recipient,
        text: text
    };

    letters.push(letter);
    localStorage.setItem("letters", JSON.stringify(letters));

    form.reset();
    displayLetters();

});

function displayLetters() {
    lettersContainer.innerHTML = "";

    letters.forEach(function (letter,index) {
        const letterDiv = document.createElement("div");
        letterDiv.className = "letter";

        letterDiv.innerHTML = `
        <h3>To: ${letter.recipient}</h3>
        <p>${letter.text}</p>
        <h3>love, bhuvi</h3>
        <button onclick="deleteLetter(${index})">Delete</button>
        `;

        lettersContainer.appendChild(letterDiv);
    });
}

function deleteLetter(index) {
    letters.splice(index,1);
    localStorage.setItem("letters", JSON.stringify(letters));
    displayLetters();
}