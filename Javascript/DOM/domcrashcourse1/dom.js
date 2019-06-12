// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);

//console.log(document.body);
console.log(document.URL);
console.log(document.title);
document.title = "DOM PRactice";
console.log(document.doctype);
console.log(document.head);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = "Header Change";
