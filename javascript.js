let div = document.querySelector('div');
//container.setAttribute('style', 'color: white; background: #F88379; text-align: center;');

div.setAttribute('id', 'bar');
div.classList.add('foo');

var elementText = document.createElement('p');
var subText = document.createTextNode('The home for those who needs help.');
elementText.appendChild(subText);
elementText.setAttribute('style', 'color:white; text-align: center;');
div.appendChild(elementText);

/*
console.log(elementText.firstChild.data);
console.log(document.querySelector('h1').firstChild.nodeValue);
console.log(document.querySelector('h1').firstChild.nodeValue.length);
*/

subText.appendData("!");
subText.deleteData(33,2);
subText.insertData(33, "...");
subText.replaceData(33,3, "!.");
console.log(subText.substringData(33,2));

let button = document.querySelector('.btn');
button.addEventListener('click', () => {
    location.replace('https://www.youtube.com/watch?v=6T5Qya2SrCw');
});

const facebook = document.querySelector('#facebookBtn');
facebook.addEventListener('click', () => {
    location.replace('https://www.facebook.com/camarinchurchsda');
});

