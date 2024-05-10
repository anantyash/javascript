const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if (height === ' ' || height <0 || isNaN(height)){
        results.innerHTML = `Not Valid height Entry ${height}`;
    }
    else if(weight === ' ' || weight <0 || isNaN(weight)){
        results.innerHTML = `Not Valid weight Entry ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         
        if (bmi<18.6) {
            results.innerHTML = `<span>Your BMI: ${bmi} &nbsp You are UnderWeight </span>`;  
            
        } else if ((bmi>18.6) && (bmi<24.9)) {
            results.innerHTML = `<span>Your BMI: ${bmi} You are Normal Weight </span>`;  
        } else if(bmi>24.9){
            results.innerHTML = `<span>Your BMI: ${bmi}\n You are OverWeight </span>`;  
            
        }
    }

})