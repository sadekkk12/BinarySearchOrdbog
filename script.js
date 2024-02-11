"use strict"
async function loadWords() {
    try {
      const response = await fetch("data/data.csv");
      const rawtext = await response.text();
  
      const globalArrayOfWords = rawtext.split("\n").map(line => {
        const parts = line.split("\t");
        return {
          variant: parts[0],
          headword: parts[1],
          homograph: parts[2],
          partofspeech: parts[3],
          id: parts[4]
        };
      });

      let hesteObject = {
        variant: "hestetyvs",
        headword: "hestetyv",
        homograph: undefined,
        partofspeech: "sb.",
        id: 53001170
      };
      //console.log(compare("hestevogn", hesteObject)); 
      //console.log(globalArrayOfWords[10000])
      console.log(binarySearch(globalArrayOfWords,"bil"));
      console.log(binarySearch(globalArrayOfWords,"bilen"));
      console.log(binarySearch(globalArrayOfWords,"kuglen"));

      
      console.log(globalArrayOfWords[51656]);
  
    } catch (error) {
      console.error('Fejl ved indlæsning af filen:', error);
    }
  }
  
  function compare(searchWord, wordObject) {
    if (searchWord < wordObject.variant) {
      return -1;
    } else if (searchWord > wordObject.variant) {
      return 1;
    } else {
      return 0;
    }

  }

  function binarySearch(words, searchWord) {
    let min = 0;
    let max = words.length - 1;
    //let mid;
    let comparisons = 0;

    while(min <= max){
      let mid = Math.floor((min + max) / 2);
      const comparison = compare(searchWord, words[mid]);
      comparisons++;

      if(comparison === 0) {
        console.log(`Found in ${comparisons} comparisons`);
        return mid;
      } else if (comparison < 0) {
        max = mid -1;
      } else {
        min = mid + 1
        
      }

    }
    console.log(`'${searchWord}' not found after ${comparisons} comparisons`);
  return -1;


  }
  
  
  
  loadWords(); 
  