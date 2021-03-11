Hello :) This program was made for a Fetch Rewards coding exercise. You can use the web app hosted at http://darvin-heo-fetch-exercise.surge.sh/ to run the code. If you'd like to run the code directly, you can call the function textSimilarity() in textSimilarity.js with the two texts as arguments.

Some words on my process:

I started the process by surveying some of my friends on how they would rate the similarity of the sample texts. For Samples 1 and 2, the average rating was 0.75556. For Samples 2 and 3, the average rating was 0.2.

With that in mind, I implemented a strategy that generated a set of all unique words from either text, then calculated what percentage of the words were shared by both texts. I decided against using the frequency of words -- I figured the most important distinction is whether the word is present or not. Eventually, I decided to count shared words twice, to capture the intuition that these two phrases:

"scan individual UPCs"
"scan individual barcodes"

...were 67% similar, even though technically only 50% of the words present are shared.

To account for word order, I extended the process to look for shared phrases of length n instead of shared words. Then I calculated a total score with this simple heuristic:

(total score) = 1/2 * (score for n=1) + 1/4 * (score for n=2) + 1/8 * (score n=3)

...and so on.

Ultimately, the scores I generated for the sample texts (0.643 and 0.176) were somewhat lower than the ones my friends provided. A data-based heuristic for creating the total score, instead of the one I threw together, would probably perform better. The tokenization also needs work, though a language processing library would quickly solve that -- I might even consider removing stop words like "the" and "of." And finally, it may be helpful to utilize the frequency of words somehow.