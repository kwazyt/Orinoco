const main = document.querySelector('main');
const table = document.createElement('table');  
const products = [];


function tableLabels() {
   
    if (localStorage.length == 0) {
        document.querySelector('Section').remove();
        
    } else {
        document.getElementById('emptyBasket').remove();
        main.innerHTML = '<h2 class = "py-5"> Items in your Cart </h2>';
        const tableLabel = document.createElement('tr');
        tableLabel.innerHTML = '<th>Name</th>' + '<th>Colour</th>' +  '<th>Price</th>' + '<th></th>';
        table.appendChild(tableLabel);

    }
}

function shoppingCart() {
    const total = document.createElement('h4');
    let totalPrice = 0;

   
    for (let i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        const tableRow = document.createElement('tr');
        const name = document.createElement('name');
        const color = document.createElement('td');
        const price = document.createElement('td');
        const image = document.createElement('td');
        image.classList.add('w-50');
        const newImage = document.createElement('img');
        newImage.classList.add('img', 'w-50', 'px-0', 'mt-2', 'mr-5');
        newImage.setAttribute('src', data.image);
        name.appendChild(newImage);
        const remove = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-warning');
  

        
        table.setAttribute('id', 'table');
        table.classList.add('table', 'mb-5');
        main.appendChild(table);

        products[i] = data.id;
        name.innerHTML = data.name;
        color.innerHTML = data.colors;
        price.innerHTML = '$' + data.price / 100;
    
       
        removeButton.innerHTML = 'Delete';
        remove.appendChild(removeButton);

        totalPrice += data.price;
        total.classList.add('text-right');
        total.innerHTML = 'Total Price is - $' + totalPrice / 100 + '  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' +  + products.length + ' items';
        sessionStorage.setItem('price', JSON.stringify(totalPrice));
        main.appendChild(total);

       

        removeButton.addEventListener('click', () => {
            localStorage.removeItem(localStorage.key(i));
            removeButton.parentElement.parentElement.remove();
            location.reload();
        });
        image.appendChild(newImage);
        image.appendChild(name);
        tableRow.appendChild(image); 
        tableRow.appendChild(color);
        tableRow.appendChild(price);
        tableRow.appendChild(remove);
        table.appendChild(tableRow);
    }
}

    function validation() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const email = document.getElementById('email');
    const placeOrderButton = document.getElementById('submit');

    let firstNameValid = false;
    let lastNameValid = false;
    let addressValid = false;
    let cityValid = false;
    let emailValid = false;

    //RegEx strings
    const nameRegex = /^[a-zA-Z]+[\-\'\s]?[a-zA-Z ]{1,40}$/;
    const addressRegex =  /^[A-Za-z0-9 ]{3,40}$/;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const wrongFirstName = document.getElementById('wrongFirstName');
    const wrongLastName = document.getElementById('wrongLastName');
    const wrongAddress = document.getElementById('wrongAddress');
    const wrongCity = document.getElementById('wrongCity');
    const wrongEmail = document.getElementById('wrongEmail');

    // Validate each field
    firstName.addEventListener('input', () => {
        if (nameRegex.test(firstName.value)) {
            wrongFirstName.classList.add('d-none');
            firstNameValid = true;
            firstName.style.border = 'thin solid green';
        }
        else {
            firstName.style.border = 'thin solid red';
            wrongFirstName.classList.remove('d-none');
            firstNameValid = false;

        }
    });

    lastName.addEventListener('input', () => {
        if (nameRegex.test(lastName.value)) {
            wrongLastName.classList.add('d-none');
            lastNameValid = true;
            lastName.style.border = 'thin solid green';
        }
        else {
            lastName.style.border = 'thin solid red';
            wrongLastName.classList.remove('d-none');
            lastNameValid = false;
        }
    });

    address.addEventListener('input', () => {
        if (addressRegex.test(address.value)) {
            wrongAddress.classList.add('d-none');
            addressValid = true;
            address.style.border = 'thin solid green';
        }
        else {
            address.style.border = 'thin solid red';
            wrongAddress.classList.remove('d-none');
            addressValid = false;
        }
    });

   city.addEventListener('input', () => {
        if (nameRegex.test(city.value)) {
            wrongCity.classList.add('d-none');
            cityValid = true;
            city.style.border = 'thin solid green';
        }
        else {
            city.style.border = 'thin solid red';
            wrongCity.classList.remove('d-none');
            cityValid = false;
        }
    });

    email.addEventListener('input', () => {
        if (emailRegex.test(email.value)) {
            wrongEmail.classList.add('d-none');
            emailValid = true;
            email.style.border = 'thin solid green';
        }
        else {
            email.style.border = 'thin solid red';
            wrongEmail.classList.remove('d-none');
            emailValid = false;
        }
    });


    //enable placeOrderButton when all fields are validated
    firstName.addEventListener('input', () =>{
        
        if ((firstNameValid) && (lastNameValid) && (cityValid) && (emailValid) && (addressValid)) {
            placeOrderButton.removeAttribute('disabled');
    
        }
        else {
            placeOrderButton.setAttribute('disabled', 'true');
        }
    });

    lastName.addEventListener('input', () =>{
        
        if ((firstNameValid) && (lastNameValid) && (cityValid) && (emailValid) && (addressValid)) {
            placeOrderButton.removeAttribute('disabled');
    
        }
        else {
            placeOrderButton.setAttribute('disabled', 'true');
        }
    });

    address.addEventListener('input', () =>{
        
        if ((firstNameValid) && (lastNameValid) && (cityValid) && (emailValid) && (addressValid)) {
            placeOrderButton.removeAttribute('disabled');
    
        }
        else {
            placeOrderButton.setAttribute('disabled', 'true');
        }
    });

    city.addEventListener('input', () =>{
        
        if ((firstNameValid) && (lastNameValid) && (cityValid) && (emailValid) && (addressValid)) {
            placeOrderButton.removeAttribute('disabled');
    
        }
        else {
            placeOrderButton.setAttribute('disabled', 'true');
        }
    });

     email.addEventListener('input', () =>{
        
        if ((firstNameValid) && (lastNameValid) && (cityValid) && (emailValid) && (addressValid)) {
            placeOrderButton.removeAttribute('disabled');
    
        }
        else {
            placeOrderButton.setAttribute('disabled', 'true');
        }
    });
    
    //submit order
    placeOrderButton.addEventListener('click', ($event) => {
        $event.preventDefault();
        const contact = {
            firstName: firstName.value, 
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        };
        const orderDetails = {
            contact, products
        };

            submitFormData(orderDetails);
            
    });

}


const api = 'http://localhost:3000/api/teddies';

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', api + '/order');
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 201) {
                    resolve(JSON.parse(request.response));
                }
                else  {
                    reject('Ooops - Something Went Wrong'); 
                }
            }
        };
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    });
}

async function submitFormData(orderDetails){
    try {
        const requestPromise = makeRequest(orderDetails);
        const response = await requestPromise;

        localStorage.clear();
        sessionStorage.setItem('data', JSON.stringify(response));
        window.location = 'confirmation.html';

    } catch (errorResponse) {
        document.querySelector('form').innerHTML = '<h2 class = "mx-auto">' + errorResponse + '<h2>';
    }
}


   
tableLabels();
shoppingCart();
validation();
