const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

while (totalEmpHrs < MAX_WORKING_HRS_IN_MONTH && totalWorkingDays < WORKING_DAYS_PER_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = GetWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calulateDailyWage(empHrs));
}
console.log(empDailyWageArray)

let empWage = calulateDailyWage(totalEmpHrs);
console.log("Total Working Days : " + totalWorkingDays + "\nTotal Hrs : " + totalEmpHrs + "\nTotal Employee Wage : " + empWage);

function calulateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

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