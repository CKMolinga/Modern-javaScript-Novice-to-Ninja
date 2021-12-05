//get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shawn', 'chun-li'];

let html = ``;

people.forEach((person) => {
    // create html template
    html += `<li style="color: purple">${person}</li>`
})

ul.innerHTML = html;