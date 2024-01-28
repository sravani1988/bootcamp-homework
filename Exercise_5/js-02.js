function fortune(jobIndex, cityIndex, spouseIndex, numKidsIndex) {
    var jobTitles = ["tester", "modeller", "developer", "seniorresearcher"];
    var cities = ["Cincinnati", "Batavia", "Kentucky", "Eventsville"];
    var spouses = ["Sravani", "Venkata", "Naga", "Lakshmi"];
    var numKids = [0, 1, 2, 3];

    var job = jobTitles[jobIndex];
    var selectedCity = cities[cityIndex];
    var selectedSpouse = spouses[spouseIndex];
    var numKidsValue = numKids[numKidsIndex];

    var fortuneMessage = "You will be a " + job + " in " + selectedCity + ", and married to " + selectedSpouse + " with " + numKidsValue + " kids.";
    
    console.log(fortuneMessage);

    return fortuneMessage;
}

// Call the function three times with different values
console.log(fortune(2, 0, 0, 1));
console.log(fortune(1, 1, 2, 0));
console.log(fortune(3, 2, 3, 2));