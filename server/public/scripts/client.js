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

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

function renderKoalas(koalas){
  console.log(' in renderKoalas', koalas);
  // Get the HTML element where the koalas will live
  let koalaEnclosure = document.getElementById('viewKoalas');
  koalaEnclosure.innerHTML = '';

  // Loop through the koalas and display each one
  for(let koala of koalas){
    koalaEnclosure.innerHTML += `
    <tr>
      <td>${koala.name}</td>
      <td>${koala.gender}</td>
      <td>${koala.age}</td>
      <td>${koala.ready_to_transfer}</td>
      <td>${koala.notes}</td>
    </tr>
    `
  }
}

getKoalas();
