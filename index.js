
const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
    const Obj = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return Obj
}

const createEmployeeRecords = (arr) => { return arr.map(createEmployeeRecord) }

function createTimeInEvent(dateStamp) {
    let Obj = {
        type: 'TimeIn',
        hour: parseInt(dateStamp.slice(-4), 10),
        date: dateStamp.slice(0, 10)
    }
    this.timeInEvents.push(Obj)
    return this
}

function createTimeOutEvent(dateStamp) {
    let Obj = {
        type: 'TimeOut',
        hour: parseInt(dateStamp.slice(-4), 10),
        date: dateStamp.slice(0, 10)
    }
    this.timeOutEvents.push(Obj)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let hourIn, hourOut
    hourIn = this.timeInEvents.find((event) => event['date']===dateStamp)
    hourOut = this.timeOutEvents.find((event) => event['date']===dateStamp)
    return (hourOut.hour-hourIn.hour)/100
}

function allWagesFor(employeeObject) {
    return employeeObject.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate(employeeObject, event.date)
    }, 0)
}

function calculatePayroll(employeeRecord) {
    return employeeRecord.reduce((total, employee) => {
        return total + allWagesFor(employee)
    }, 0)
}