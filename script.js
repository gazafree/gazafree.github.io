import {formatWords ,convertText, selectKeywords, selectAll, deselectAll} from './ui_module.js';

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  };


document.addEventListener('DOMContentLoaded', (event) => {
    // For 'submit-text' button
    const submitTextButton = document.getElementById('submit-text');
    submitTextButton.addEventListener('click', formatWords);

    // For 'select-keywords' button
    const selectKeywordsButton = document.getElementById('select-keywords');
    selectKeywordsButton.addEventListener('click', selectKeywords);

    // For 'deselect-all' button
    const deselectAllButton = document.getElementById('deselect-all');
    deselectAllButton.addEventListener('click', deselectAll);

    // For 'select-all' button
    const selectAllButton = document.getElementById('select-all');
    selectAllButton.addEventListener('click', selectAll);

    // For 'convert' button
    const convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertText);
});
