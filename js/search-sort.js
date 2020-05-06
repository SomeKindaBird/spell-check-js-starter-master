// Search & Sort Functions Library

// LINEAR SEARCH FUNCTION CRITERIA
// Search the anArray argument for the item argument using the linear search algorithm.
// If item found, return index where found, else return -1.
function linearSearch(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (item == anArray[i]) {
            return i;
        }
    }

    return -1;
}

// BINARY SEARCH FUNCTION CRITERIA
// Search anArray for the item using the binary search algorithm.
// If item found, return index where found, else return -1.
function binarySearch(anArray, item) {
    let lowerIndex = 0;
    let upperIndex = anArray.length - 1;
    let middleIndex;

    while (lowerIndex <= upperIndex) {
        middleIndex = Math.floor((lowerIndex + upperIndex) / 2);

        if (item.localeCompare(anArray[middleIndex]) == 0) {
            return middleIndex;
        } else if (item.localeCompare(anArray[middleIndex]) == -1) {
            upperIndex = middleIndex - 1;
        } else {
            lowerIndex = middleIndex + 1;
        }
    }

    return -1;
}