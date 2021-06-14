let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function submitFullNames(){
    event.preventDefault();
    let gender = document.getElementById('genders').value; 
    let date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male'){
        alert(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your Akan name is " + maleNames[date.getDay()]);
        document.getElementById('result').innerHTML = maleNames[date.getDay()]
    
    }
    else if (gender === 'female'){
        alert(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your Akan name is " + femaleNames[date.getDay()]);
        document.getElementById('result').innerHTML = femaleNames[date.getDay()];
    }
    else{
        alert("Error: Input correct date");''
    }
}