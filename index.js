var common = require('./common');
var fs = require('fs');
var program = require('commander');

var analyze = function(phrase, fileName) {
    var container = {};
   container.words = phrase.split(' ');
   container.letters = common.splitWords(container.words);
   container.maxLength = common.findMaxLength(container.words);
   container.rightAligned = common.alignRight(container.words, container.maxLength);
   container.leftAligned  = common.alignLeft(container.words, container.maxLength);
   container.rightAlignedRotated = common.rotate(container.rightAligned, container.maxLength);
   container.leftAlignedRotated = common.rotate(container.leftAligned, container.maxLength);
   container.centerRightAligned = common.alignCenterRight(container.letters, container.maxLength);
   container.centerLeftAligned = common.alignCenterLeft(container.letters, container.maxLength);
   container.centerRightAlignedRotated = common.rotate(container.centerRightAligned, container.maxLength);
   container.centerLeftAlignedRotated = common.rotate(container.centerLeftAligned, container.maxLength);
   var columnAlignments = '';
   for (var i = 3; i < (Math.ceil(container.words.length / 2)); i++){
        columnAlignments += 'Column Count: ' + i + '\n'
        var aligned = common.alignColumns(container.letters, i);
        for (var j = 0; j < aligned.length; j++ ) {
            columnAlignments += JSON.stringify(aligned[j]) + '\n';
        }
        columnAlignments += '\n';
   }
   var output = '';
   for (var key in container){
        output += key.toString() + ': \n';
        if (container[key].length){
            for (var i = 0; i < container[key].length; i++) {
                output += JSON.stringify(container[key][i]) + '\n';      
            }
        } else {
            output += JSON.stringify(container[key]) + '\n';
        }
        output += '\n';
   }
   output += 'Column Alignments: \n';
   output += columnAlignments;
   fs.writeFileSync(fileName, output);
}

program.version('0.0.1')
    .option('-p, --phrase [phrase]', 'Phrase to analyze', 'The quick brown fox jumped over the lazy hare')
    .option('-f, --filename [filename]', 'Output file name', 'test-output.txt')
    .parse(process.argv)
analyze(program.phrase, program.filename);
