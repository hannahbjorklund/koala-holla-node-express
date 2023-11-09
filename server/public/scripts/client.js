console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
    method: 'GET',
    url: '/koalas'
  }).then((response) => {
    let koalas = response.data;
    console.log("GET request at /koalas, response.data:", koalas);
    renderKoalas(koalas);
  }).catch((error) => {
    console.error("Error in GET", error);
  })
  
} // end getKoalas

function saveKoala(koalaId){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
  axios({
    method: 'PUT',
    url: `/koalas/${koalaId}`,
  })
  .then((response) => {
    console.log('PUT request successful!')
    getKoalas()
  })
  .catch((error) => {
    console.error('ERROR!! ERROR!! ERROR!! PUUTT request failed')
  })
}

function renderKoalas(koalas){
  console.log(' in renderKoalas', koalas);
  // Get the HTML element where the koalas will live
  let koalaEnclosure = document.getElementById('viewKoalas');
  koalaEnclosure.innerHTML = '';

  // Loop through the koalas and display each one
  for(let koala of koalas){
    let readyText
    if (koala.ready_to_transfer === true) {
      readyText = ''
    } else {
      readyText = `<button onclick="saveKoala(${koala.id})">Ready</button>`
    }

    koalaEnclosure.innerHTML += `
    <tr>
      <td>${koala.name}</td>
      <td>${koala.gender}</td>
      <td>${koala.age}</td>
      <td>${readyText}</td>
      <td>${koala.ready_to_transfer}</td>
      <td>${koala.notes}</td>
      <td><button onclick="retireKoala(${koala.id})">Retire</button></td>
    </tr>
    `
  }
}

function retireKoala(koalaId) {
  console.log('in retire');
  axios({
    method: 'DELETE',
    url: `/koalas/${koalaId}`
  })
  .then((response) => {
    getKoalas();
  })
}

function addKoala(event){
  event.preventDefault();

  // Collect user input data and put into a koala object
  let newKoalaName = document.getElementById('nameIn').value; 
  let newKoalaGender = document.getElementById('genderIn').value; 
  let newKoalaAge = document.getElementById('ageIn').value; 
  let newKoalaTransfer = document.getElementById('readyForTransferIn').value; 
  let newKoalaNotes = document.getElementById('notesIn').value; 

  let newKoala = {
    name: newKoalaName,
    gender: newKoalaGender,
    age: newKoalaAge,
    ready_to_transfer: newKoalaTransfer,
    notes: newKoalaNotes
  };

  // Axios POST request
  axios({
    method: 'POST',
    url: '/koalas',
    data: newKoala
  })
  .then((response) =>{
    console.log('POST request succesful! response:', response)
    getKoalas();
  })
  .catch((error) => {
    console.error('Oh no, the POST request failed :<')
  })

  document.getElementById('nameIn').value = '';
  document.getElementById('genderIn').value = '';
  document.getElementById('ageIn').value = '';
  document.getElementById('readyForTransferIn').value = '';
  document.getElementById('notesIn').value = '';

}

getKoalas();
