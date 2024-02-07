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
      console.log(compare("hestevogn", hesteObject)); 
      console.log(globalArrayOfWords[10000])
  
    } catch (error) {
      console.error('Fejl ved indlæsning af filen:', error);
    }
  }
  
  function compare(searchWord, wordObject) {
    if (searchWord < wordObject.headword) {
      return -1;
    } else if (searchWord > wordObject.headword) {
      return 1;
    } else {
      return 0;
    }
  }

  
  
  loadWords(); 
  