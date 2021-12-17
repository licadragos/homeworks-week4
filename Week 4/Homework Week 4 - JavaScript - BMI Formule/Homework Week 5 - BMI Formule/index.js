var person1 = {
    name: "John Doe",
    gender: "M",
    height: 1.9,
    weight: 87
};

var person2 = {
    name: "Mary Anne",
    gender: "F",
    height: 1.65,
    weight: 82
}

function calculateBMI(person) {
    return (person.weight/(person.height*person.height));
}

function determineBodyType(BMI) {
    var underweight = BMI<18.5;
    var normal =  BMI>18.5 && BMI<25;
    var overweight = BMI>25 && BMI<30;

    if (underweight) {
        return weightRange = "underweight";
    }
     else if(normal) {
         return weightRange = "normal";
    }
     else if (overweight) {
         return weightRange = "overweight";
     }
    
     return weightRange = "obese";
}


 