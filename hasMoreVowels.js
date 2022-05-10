const hasMoreVowels = word => {
    //keep track of amt of vowels in word
    let vCount = 0;
    //string of vowels
    const vowels = 'aeiou';
    //loop through the word and string of vowels 
    for (let elements in word) {
        for (let velem in vowels) {
            if (word[elements] === vowels[velem]) {
                //add 1 to the vowel count
                vCount++; 
            }
        }
    }
    //true if the vowel count is more than half of the word's characters
    return vCount > word.length / 2;
}
