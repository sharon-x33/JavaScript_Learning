for (let li of document.querySelectorAll('li')) {
    // get the title from the text node
    let title = li.firstChild.data;

    title = title.trim(); // remove extra spaces from ends

    // get the descendants count
    let count = li.getElementsByTagName('li').length;

    alert(title + ': ' + count);
}    