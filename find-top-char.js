function mostOccoredChar(string) {

    const stringArray = string.replace(/[^a-zA-Z0-9]/g, '').split('').filter(a=> a.trim()); // -

    console.log(stringArray) //how to console.log this when the test is on?

    const uniqueStringValue = new Set(stringArray)
    console.log(uniqueStringValue)
    const uniqueStringValueArray = [...uniqueStringValue]
    console.log(uniqueStringValueArray)
    counter = {}

    for (let i = 0; i < uniqueStringValueArray.length; i++) {

        for (let j = i; j < stringArray.length; j++) {

            if (uniqueStringValueArray[i] === stringArray[j]) {
                //console.log(uniqueStringValueArray[i] + " is found at position " + (j + 1) + " of " + string)

                // counter.push([uniqueStringValueArray[i], j]) 
                let letter = uniqueStringValueArray[i]
                if (!counter[letter]) {
                    counter[letter] = 0
                }
                counter[letter] += 1

                continue
            }
        }

    }
    let entries =Object.entries(counter)
    let orderEntries = entries.sort((a,b) => b[1]-a[1])
    console.log (`the most frequent letter is "${orderEntries[0][0]}" which occurs ${orderEntries[0][1]} time(s)`)
    return orderEntries[0][0]
}

module.exports = mostOccoredChar