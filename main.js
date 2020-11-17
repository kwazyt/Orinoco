

// Request API
 makeRequest = () => {
    return new Promise((resolve, reject) =>{
let apiRequest = new XMLHttpRequest();
apiRequest.open('GET', 'http://localhost:3000/api/teddies');
apiRequest.send();
apiRequest.onreadystatechange=()=>{
    if (apiRequest.readyState ===4){
        if(apiRequest.status ===200){
            resolve(JSON.parse(apiRequest.response));
        } else{
        reject('Ooops - Something Went Wrong');}
        }
    }
});
}

//Create card

    createCard = (response) => {
      const main = document.querySelector('main');
      for (let i = 0; i < response.length; i++){


          const card = document.createElement('article');
          card.classList.add( 'card', 'col-12', 'col-md-6', 'col-lg-4', 'mx-0', 'mb-2', 'p-3');

          const img = response[i].imageUrl;
          const newImage = document.createElement('img');
          newImage.classList.add('img', 'w-100');
          newImage.setAttribute('src', img)

          const newA = document.createElement('a');
          newA.setAttribute('href', 'item.html?id=' + response[i]._id);
          newA.classList.add('stretched-link')
          
          

          //name, description, price
          card.innerHTML = '<h2>' + response[i].name + '</h2>';
          card.innerHTML += '<p>' + response[i].description + '</p>';
          card.innerHTML += '<p>' + '$' + response[i].price/100 + '</p>';

          card.appendChild(newImage);
          card.appendChild(newA);
          main.appendChild(card);

          
      }
    }

    init = async () => {
        try {
        
            const requestPromise = makeRequest();
            const response = await requestPromise;
        
            createCard(response);
        } catch (error) {
            
            document.querySelector('main').innerHTML = '<h2 class = "mx-auto">' + error + '<h2>';
        }
    }
    
    init();
