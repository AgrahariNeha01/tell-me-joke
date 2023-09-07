const englishJokes = [
    "Why don't scientists trust atoms? Because they make up everything! 😄",
    "Parallel lines have so much in common. It's a shame they'll never meet. 😆",
    "How do you organize a space party? You 'planet'! 🚀😂",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. 😲😄",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾🏆😂",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them. 😂",
    "I'm reading a book on anti-gravity. It's impossible to put down! 😄",
    "What do you call a bear with no teeth? A gummy bear! 🐻😁",
    "Why did the bicycle fall over? Because it was two-tired! 🚲😂",
    "How does a penguin build its house? Igloos it together! 🐧❄️😄"
];

const hindiJokes = [
    "पप्पु: 'तू तो बहुत ही अच्छा गाता है, क्या तू गाने का कोई कॉन्टेस्ट जीत सकता है?'\nबिल्लू: 'हां, लेकिन खाने का कोई कॉन्टेस्ट जीतना हो तो मैं पक्का जीतूंगा! 😄'",

    "टीचर: 'बिल्लू, तुमने क्लास में घूस क्यों मारा?'\nबिल्लू: 'वो मेरे ख़्वाब में आ रहे थे, मैंने सोचा कि क्यों अकेले में ही मिल लूँ। 😂'",

    "टीचर: 'बिल्लू, तुम अपनी पिता का काम क्यों नहीं करते?'\nबिल्लू: 'क्या करूँ, वो कहते हैं कि जब तक तुम पढ़ रहे हो, हमारे पास तुम्हारा काम ही क्यों?' 😄",

    "पप्पु: 'बिल्लू, तेरे साथ बहुत दिनों बाद मिलकर खुशी हुई।'\nबिल्लू: 'मुझे भी पप्पु, अब तुम मेरे अंदर नहीं हो। 😆'",
    
    "टीचर: 'बिल्लू, तुम्हारे पिता क्या काम करते हैं?'\nबिल्लू: 'जी, वो अपने बस का कांडक्टर हैं।'\nटीचर: 'बहुत अच्छा, और तुम्हारे बड़े भाई क्या करते हैं?'\nबिल्लू: 'वो बस के पैसे चुमते हैं। 😂'",
    
    "टीचर: 'बिल्लू, तुम्हारी तस्वीर बहुत ही खराब है।'\nबिल्लू: 'जी, यही तो वजह है कि मैं खुदको तस्वीर में ही अच्छा दिखता हूँ। 😄'",
    
    "बिल्लू: 'पप्पु, ये गिलेदार वाला कुत्ता तुम्हारे पिता पे क्यों हमेशा चिल्लाता रहता है?'\nपप्पु: 'वो अपने काम से खुश नहीं है।'\nबिल्लू: 'वो क्या काम करता है?'\nपप्पु: 'गर्लफ्रें 😆'"
];


const jokeButton = document.getElementById("randomjoke");
const jokeContainer = document.getElementById("Joke");

function displayEnglishJoke() {
    const randomIndex = Math.floor(Math.random() * englishJokes.length);
    const randomJoke = englishJokes[randomIndex];
    jokeContainer.innerHTML = `<p>${randomJoke}</p>`;
}

function displayHindiJoke() {
    const randomIndex = Math.floor(Math.random() * hindiJokes.length);
    const randomJoke = hindiJokes[randomIndex];
    jokeContainer.innerHTML = `<p>${randomJoke}</p>`;
}

function displayRandomJoke() {
    const randomLanguage = Math.random() < 0.5 ? "english" : "hindi";
    const jokesArray = randomLanguage === "english" ? englishJokes : hindiJokes;
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    const randomJoke = jokesArray[randomIndex];
    jokeContainer.innerHTML = `<p>${randomJoke}</p>`;
}

jokeButton.addEventListener("click", displayRandomJoke);

const hindiButton = document.getElementById("hindibutton");
hindiButton.addEventListener("click", displayHindiJoke);

const englishButton = document.getElementById("englishbutton");
englishButton.addEventListener("click", displayEnglishJoke);
