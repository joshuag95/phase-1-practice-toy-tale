let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.getElementById('toy-collection');
  

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  //Fetch Requests
    function fetchResources(url) {
      return fetch(url).then(r => r.json());
    }

    function fetchPost(url, body) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'         
        },
        body: JSON.stringify(body)
      })
        .then(r => r.json())
    }

    function fetchPatch(url, body) {
      return fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'         
        },
        body: JSON.stringify(body)
      })
        .then(r => r.json())
    }
      
    

  //Rendering Functions

  function renderToy(toy) {
    const createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'card');
    const h2 = document.createElement('h2');
    h2.textContent = toy.name;
    const img = document.createElement('img');
    img.src = toy.image;
    img.setAttribute('class', 'toy-avatar');
    const p = document.createElement('p');
    p.textContent = toy.likes;
    const btn = document.createElement('button');
    btn.setAttribute('class', 'like-btn');
    btn.setAttribute('id', toy.id);
    btn.textContent = "Like"

    btn.addEventListener('click', handleLikeButton)

    createDiv.append(h2, img, p, btn);
    toyCollection.append(createDiv);
  }

  //Event Handlers
  function handleForm(e) {
    e.preventDefault();

    const newToy = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0
    };

    fetchPost('http://localhost:3000/toys', newToy).then(toy => renderToy(toy));}

    function handleLikeButton(e) {
      e.target
      fetchPATCH
    }

  //Invoking Functions

  fetchResources('http://localhost:3000/toys').then(toys => toys.forEach(renderToy))

  document.querySelector('form').addEventListener('submit', handleForm);

});
