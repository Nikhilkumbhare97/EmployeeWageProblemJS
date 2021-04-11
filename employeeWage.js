const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;

for (i = 0; i < WORKING_DAYS_PER_MONTH; i++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += GetWorkingHrs(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs : " + empHrs + " Total Employee Wage : " + empWage);

function GetWorkingHrs(empCheck) {
    switch (empCheck) {
        case IS_PRESENT_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PRESENT_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}
