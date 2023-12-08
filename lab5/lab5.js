const letterImages = {};

const defaultImagePath = "./images/default.png";
const basePath = "./images/";

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (const letter of letters) {
    letterImages[letter] = basePath + (letter.toLowerCase() === letter ? "small_" : "") + letter.toUpperCase() + ".png";
}

letterImages.default = defaultImagePath;

const textConverter = () => {
    const sourceText = document.getElementById('source-text').value;
    const resultContainer = document.getElementById('result-text');

    let resultHTML = '';

    for (const char of sourceText) {
        const imagePath = letterImages[char] || letterImages.default;

        resultHTML += `<img src="${imagePath}" alt="${char}" class="result-img" />`;
    }

    resultContainer.innerHTML = resultHTML;
};

document.getElementById('go').addEventListener('click', textConverter);
