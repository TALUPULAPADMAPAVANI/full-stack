age=21
if(age>=18){
    console.log("you are eligible")
}else{
    console.log("you are not eligible")
}

//grading system using if,else,if else
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 60) {
        return "F";
    } else {
        return "Invalid score";
    }
}
const studentScore = 85;
const grade = getGrade(studentScore);
console.log(`Student score: ${studentScore} => Grade: ${grade}`);

//a>>b
//sp=30kmph
//every 10 sp=sp*2
//max speed=120
//he travelled for 96 mins

let speed = 30;
const maxSpeed = 120;
const timeHours = 96 / 60; 
while (speed < maxSpeed) {
  speed *= 2;
  if (speed > maxSpeed) {
    speed = maxSpeed;
    break;
  }
}
const distance = speed * timeHours;
console.log("Final speed:", speed, "km/h");
console.log("Distance traveled:", distance.toFixed(2), "km");
//or
let speed =30;
let distance =0;
for(i=10;i<=90;i+=10){
    distance=distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance=distance+speed/10
console.log(distance);

//i1
//l=10
//d=d+s/6 ==0+30/6=5
//i=i+10
//s<120 so s=s*2 ==30*2=60

//b=30 for 4km
//for the next 5km the price is 10
//for the next 10km the price is 15
//if the kms are more the will be 20
//person travelled 19.5 kms what will be the price