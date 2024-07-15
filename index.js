function addingEventListener() {
   
    const button = document.getElementById('button');


    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
}


addingEventListener();