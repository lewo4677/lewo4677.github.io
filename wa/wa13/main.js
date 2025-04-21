//Problem 1
let sam = {
    name: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raise: true,
    wfh: true
};

let mary = {
    name: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raise: true,
    wfh: false
};

let bill = {
    name: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raise: false,
    wfh: false
};

//Problem 3
let anna = {
    name: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raise: false,
    wfh: true
};

console.log("Employees:", sam, mary, bill);


//Problem 2
let company = 
{
    name: "Tech Stars",
    website: "www.techstars.site",
    employees: [sam, mary, bill, anna]
}

console.log("Company:", company);

//Problem 4
console.log("Total salary:", sam.salary + mary.salary + bill.salary + anna.salary);


//Problem 5
function getRaise()
{
    for (let i = 0; i < 4; i++)
    {
        if (company.employees[i].raise === true)
        {

            company.employees[i].salary *= 1.1;
            company.employees[i].raise = false;
        }
    }
    
}

getRaise();

for (let i = 0; i < 4; i++)
{
    console.log("Employee name: ", company.employees[i].name, ", Salary after potential raise: ", company.employees[i].salary, "\n")
}


//Problem 6
for (let i = 0; i < 4; i++)
{
    console.log("Employee name: ", company.employees[i].name, ", Works from home?: ")

    if (company.employees[i].wfh == true)
    {
        console.log("Yes \n");
    }
    else
    {
        console.log("No \n");
    }
}
    
