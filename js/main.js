

/*
//navbar
document.addEventListener("DOMContentLoaded", function(){
    // add padding top to show content behind navbar
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
}); 
*/


//header
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the header content and inject it into the container
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerContainer').innerHTML = data;
        })
        .catch(error => console.error('Error fetching header:', error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footerContainer').innerHTML = data;
})
.catch(error => console.error('Error fetching footer:', error));
});


//contact form buttons
  
