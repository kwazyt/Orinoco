
makeRequest = () => {
    return new Promise((resolve, reject) =>{

        //URL query parameters
        
        const urlParameters = new URLSearchParams(window.location.search);
        const id = urlParameters.get('id');

        
let apiRequest = new XMLHttpRequest();
apiRequest.open('GET', 'http://localhost:3000/api/teddies/' + id);
apiRequest.send();
apiRequest.onreadystatechange=()=>{
    if (apiRequest.readyState ===4)
        if(apiRequest.status ===200){
            resolve(JSON.parse(apiRequest.response));
        } else{
        reject('Ooops - Something Went Wrong');}
        }
    }
);
}


createCard = (response) => {
           const main = document.querySelector('main');
      

          const card = document.createElement('article');
          card.classList.add( 'card', 'col-12', 'm-5', 'p-4');

          const img = response.imageUrl;
          const newImage = document.createElement('img');
          newImage.classList.add('img', 'w-100', 'm-3');
          newImage.setAttribute('src', img)

          const button = document.createElement('button');
          button.classList.add('btn', 'btn-primary', 'w-50', 'mx-auto', 'my-4');
          button.innerHTML = 'Add to cart';

          const info = document.createElement('p');
          info.classList.add('text-center', 'text-info');
          

          const form = document.createElement('form');
          form.classList.add('mx-auto', 'font-weight-bold', 'text-white', 'bg-dark', 'p-2')
          const dropDownMenuLabel = document.createElement('label');
          const dropDownMenu = document.createElement('select');
          dropDownMenu.classList.add('ml-3');
          
          dropDownMenuLabel.innerHTML = 'Choose the colour of your Teddy  ' ;
          form.appendChild(dropDownMenuLabel);
          form.appendChild(dropDownMenu);

          
          card.innerHTML += '<h2>' + response.name + '</h2>';
          

          card.appendChild(newImage);

          for (let i in response.colors)  {
            const option = document.createElement('option');
            option.innerHTML = response.colors[i];
            option.setAttribute('value', response.colors[i])
            dropDownMenu.appendChild(option);
        }

          card.innerHTML += '<p>' + response.description + '</p>';
          card.innerHTML += '<p>' + '$' + response.price/100 + '</p>';


          button.addEventListener('click', () =>{
              const teddiesColor = document.querySelector('select').value;
              const itemsInCart = {name: response.name, id: response._id, colors: teddiesColor, description: response.description, price: response.price, image: response.imageUrl };

              localStorage.setItem(response._id + teddiesColor, JSON.stringify(itemsInCart));

              info.innerText =  response.name + '- colour '+ teddiesColor + ' added to the cart!';
              card.appendChild(info);


          });
          
          card.appendChild(form);
          card.appendChild(button);

          main.appendChild(card);

          
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