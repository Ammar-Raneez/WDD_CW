//function to increase font size
function increaseFontSize() {
    docElement = document.getElementById("font-change");
    docElement2 = document.getElementById("font-change2");
    docElement3 = document.getElementById("font-change3");
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize + 2) + 'px';
    docElement2.style.fontSize = (currentFontSize + 2) + 'px';
    docElement3.style.fontSize = (currentFontSize + 2) + 'px';
}

//function to decrease font size
function decreaseFontSize() {
    docElement = document.getElementById("font-change");
    docElement2 = document.getElementById("font-change2");
    docElement3 = document.getElementById("font-change3");
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize - 2) + 'px';
    docElement2.style.fontSize = (currentFontSize - 2) + 'px';
    docElement3style.fontSize = (currentFontSize - 2) + 'px';
}
