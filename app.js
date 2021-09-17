// document.querySelector('#algo').innerHTML = `<div id="gg" class="alert alert-danger" role="alert">
// A simple primary alert—check it out!
// </div>`;

for (let index = 0; index < 5; index++) {

  const div = document.createElement('div');

  // div.classList.add('alert');
  // div.classList.add('alert-primary');

  // div.onclick = `alert('${index}')`;

  // div.textContent = `alerta numero ${index}`;

  const id = 'id' + index
  const titulo = `A simple primary ${index}`


  div.innerHTML =  `<div id="${id}" class="alert alert-info" role="alert">
  ${titulo}

  <br>
  
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  </div>`;

  const padre = document.querySelector('#algo');

  console.log(padre);

  padre.appendChild(div);
}