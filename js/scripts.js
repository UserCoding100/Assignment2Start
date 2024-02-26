// constants for query selector
const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const studentIdParagraph = document.getElementById('200550446');

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    studentIdParagraph.textContent = "Student ID: 200550446";

    // Change background color based on user input
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput >= 20 && userInput < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput >= 40 && userInput < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput >= 60 && userInput < 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (userInput >= 80 && userInput <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1-100
    // Changes the  background color based on a random number
    if (randomInput < 0 || randomInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (randomInput >= 0 && randomInput < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (randomInput >= 20 && randomInput < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (randomInput >= 40 && randomInput < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (randomInput >= 60 && randomInput < 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (randomInput >= 80 && randomInput <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// function to generate options for select list
function addList() {
    const imgFolder = 'img/';
    const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']; 

    // Clear  the previous options
    imageSelect.innerHTML = '<option value="">Select any img.....</option>';

    // Adds new options based on name of the images
    imageNames.forEach(imageName => {
        const option = document.createElement('option');
        option.text = imageName;
        option.value = imgFolder + imageName;
        imageSelect.appendChild(option);
    });
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage;
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);

// event listener for on change event of select
imageSelect.addEventListener('change', changeImage);
