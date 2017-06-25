
// Concepts taken from : Most frequent word program of thinkful
var filterText = function(rawText){
    // Checks only for non-alphanumeric character
    var regex = /[^A-Za-z0-9_]+/;
    return rawText.toLowerCase().replace(/'+/,"").split(regex).filter(Boolean).sort();
};
var analyzeText = function(text){
    var words = filterText(text);
    var wordsObject = {};
    var wordCount = words.length;
    var uniqueWordCount = 0, wordsLength = 0;
    for (var i = 0; i < wordCount; i++) {
        if (words[i] in wordsObject) {
          wordsObject[words[i]]++;
          wordsLength += words[i].length;
        }
        else {
          wordsObject[words[i]]=1;
          wordsLength += words[i].length;
          uniqueWordCount++;
        }
    }
    var averageWordLength = wordsLength / wordCount;
    var textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(wordCount);
    textReport.find('.js-unique-word-count').text(uniqueWordCount);
    textReport.find('.js-average-word-length').text(averageWordLength.toFixed(2));
    textReport.removeClass('hidden');
};

$(function(){
    $('form').submit(function(event){
        event.preventDefault();
        var text = $('#user-text').val();
        analyzeText(text);
    });
});