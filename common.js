//Common library

exports.splitWords = function(words) {
    var container = [];
    for (var i = 0; i < words.length; i++){
            container.push(words[i].split(''));
        }
    return container;
}

exports.findMaxLength = function(words){
    var max = 0;
    for (var i = 0; i < words.length; i++) {
            if (words[i].length > max) {
                        max = words[i].length;
                    }
        }
    return max;
}

exports.alignRight = function(words, maxLength) {
    var container = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i].split("") || [];
        for (var j = word.length; j < maxLength; j++) {
            word.unshift(" ");
        }
        container.push(word);
    }
    return container;
}

exports.alignLeft = function(words, maxLength) {
    var container = [];
    for (var i = 0; i< words.length; i++){
        var word = words[i].split("") || [];
        var originalLength = word.length;
        for (var j = originalLength; j < maxLength; j++) {
            word.push(" ");
        }
        container.push(word);
    }
    return container;
}

exports.rotate = function(letters) {
    var container = [];
    for (var i = 0; i < letters.length; i++) {
        for (var j = 0; j < letters[i].length; j++){
            container[j] = container[j] || [];
            container[j][i] = letters[i][j] || ' ';
        }
     }
    return container;
}

exports.alignCenterLeft = function(letters, maxLength) {
    var container = [];
    for (var i = 0; i < letters.length; i++) {
        var center = Math.floor(maxLength / 2);
        var letterGroup = letters[i];
        container[i] = container[i] || [];
        var offset = Math.floor(letterGroup.length / 2);
        var index = 0;
        for (var j = 0; j < maxLength; j++) {
           if (j >= center - offset && index < letterGroup.length) {
               container[i][j] = letterGroup[index];
               index++;
           } else {
                container[i][j] = ' ';
           }
        }
    }
    return container;
}

exports.alignCenterRight = function(letters, maxLength) {
    var container = [];
    for (var i = 0; i < letters.length; i++) {
        var center = Math.ceil(maxLength / 2);
        var letterGroup = letters[i];
        container[i] = container[i] || [];
        var offset = Math.ceil(letterGroup.length / 2);
        var index = 0;
        for (var j = 0; j < maxLength; j++) {
           if (j >= center - offset && index < letterGroup.length) {
               container[i][j] = letterGroup[index];
               index++;
           } else {
                container[i][j] = ' ';
           }
        }
    }
    return container;
}

exports.alignColumns = function(letters, numberOfColumns) {
    var container = [];
    var index = 0;
    var counter = 0;
    for (var i = 0; i < letters.length; i++) {
        var word = letters[i];
        for (var j = 0; j < word.length; j++){
            var letter = word[j];
            container[index] = container[index] || [];
            container[index][counter] = letter;
            counter++;
            if (counter % numberOfColumns == 0){
                index++;
                counter = 0;
            }
        }
    }
    return container;
}
