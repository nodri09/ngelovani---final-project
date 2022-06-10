/* Tour booking form validator */ 
const tourStartDate = document.getElementById('tourStartDate');
const tourEndDate = document.getElementById('tourEndDate');
const dateError = document.querySelector('span.error');

tourStartDate.addEventListener('input', event => {
    var startDate = event.target.value;

    // console.log(`Tour Start Date: ${ event.target.value }`);

    tourEndDate.addEventListener('input', event => {

        var endDate = event.target.value

        if(endDate <= startDate) {
            dateError.textContent = "Tour cannot be ending before the start of the tour.";
            dateError.className = 'error active';
        } else {
            dateError.textContent = '';
            dateError.className = 'error';
        }
        
        // console.log(`Tour End Date: ${ event.target.value }`);
    });


});
