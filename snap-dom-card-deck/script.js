// turn the array below into a bootstrap card deck using javascript map.

let testArray = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}, {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}, {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}, {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
}, {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
}];


window.onload = function() {

    const cardTitle1 = document.querySelector('.card1 .card-title');
    const cardBody1 = document.querySelector('.card1 .card-text');

    const cardTitle2 = document.querySelector('.card2 .card-title');
    const cardBody2 = document.querySelector('.card2 .card-text');

    const cardTitle3 = document.querySelector('.card3 .card-title');
    const cardBody3 = document.querySelector('.card3 .card-text');

    const cardTitle4 = document.querySelector('.card4 .card-title');
    const cardBody4 = document.querySelector('.card4 .card-text');

    const cardTitle5 = document.querySelector('.card5 .card-title');
    const cardBody5 = document.querySelector('.card5 .card-text');

    const cardDeck = [cardTitle1, ]

    cardTitle1.innerHTML = testArray[0]["title"];
    cardBody1.innerHTML = testArray[0]["body"];

    cardTitle2.innerHTML = testArray[1]["title"];
    cardBody2.innerHTML = testArray[1]["body"];

    cardTitle3.innerHTML = testArray[2]["title"];
    cardBody3.innerHTML = testArray[2]["body"];

    cardTitle4.innerHTML = testArray[3]["title"];
    cardBody4.innerHTML = testArray[3]["body"];

    cardTitle5.innerHTML = testArray[4]["title"];
    cardBody5.innerHTML = testArray[4]["body"];

};


//TODO: make an array for the constants and a function that interates through that array and iterates through the testArray that was given.

window.onload = () => {
        let cardDeck = testArray.map((index) => {
            return `
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${index.title}</h5>
                    <p class="card-text">${index.body}</p>
                  </div>
                </div>
                `
        });
        let target = document.getElementById('target');
        target.innerHTML = cardDeck;
    };
    
    // .join("\r\n");