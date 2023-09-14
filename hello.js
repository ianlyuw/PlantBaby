const userAction = async () => {
    const response = await fetch('https://perenual.com/api/species/details/1?key=sk-OM1k64b37229858e41522');
    const myJson = await response.json(); //extract JSON from the http response

    // do something with myJson
    const isPoisonousToPets = myJson.poisonous_to_pets;

    // Use the boolean value as needed
    console.log('Is poisonous to pets?', isPoisonousToPets);
}
//prints out boolean poisonous to plants as a html line rather than an alert - done

//incorporate user action to get different ids of plants (ex. 1 = European Silver Fir) and return whether it's poisonous to pets - done

//incorporates the "q" parameter (string) to search for a species to replace the id search for quality of life
    //returns list
    //pick out ids
        // for each id, call my function to return plant data

//if search is broad/ doesn't attribute to one specific plant creates a list with poisonous boolean

//incorporate a thumbnail/ basic information such as scientific name in a new page