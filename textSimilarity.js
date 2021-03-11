// returns the similarity of two strings a and b

function textSimilarity(textA, textB) {
    let scores = [];
    for (let n = 1; n < 6; n ++) {
        a = allPhrases(tokenize(textA), n);
        b = allPhrases(tokenize(textB), n);

        if (n > a.length || n > b.length)
            break;

        combined = a.concat(b);

        let score = 0;
        let total = 0;

        // increment the score for every shared phrase
        // shared phrases are counted twice, by design
        for (let phrase of combined) {
            if (b.includes(phrase) && a.includes(phrase))
                score += 1;
        }
                
        // we divide by the number of phrases to normalize
        scores.push(score / combined.length);
    }
    
    // the final score, which considers the score for multiple phrase lengths, is:
    // 1/2 * (1-word phrases) + 1/4 * (2-word phrases) + 1/8 * (3-word phrases)... and so on
    let totalScore = 0;
    for (let i = 0; i < scores.length; i ++) {
        if (i == scores.length - 1)
            totalScore += scores[i] / (2 ** i);
        else
            totalScore += scores[i] / (2 ** (i+1));
    }

    return [totalScore, ...scores];
}

// strips non-alphanumeric characters, folds the case, and tokenizes it based on spaces
// this is just a baseline, and doesn't correctly handle words with diacritics, hyphenated words, contractions, etc.

function tokenize(text) {
    let characters = /[^a-zA-Z0-9\s]/g;
    let newText = text.replace(characters, '').toLowerCase();
    return newText.split(' ');
}

// returns an array of all unique n-word phrase in the provided tokenized text
// for example, a string like "just scan your receipt" with n = 2 would return:
// ["just scan", "scan your", "your receipt"]

function allPhrases(words, n) {
    let phrases = new Set();
    for (let i = 0; i <= words.length - n; i ++)
        phrases.add(words.slice(i, i + n).join(' '));
    return [...phrases];
}