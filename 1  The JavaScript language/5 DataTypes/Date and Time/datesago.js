function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

let date = new Date();

alert( getDateAgo(date, 1) );
alert( getDateAgo(date, 2) ); 
alert( getDateAgo(date, 365) );