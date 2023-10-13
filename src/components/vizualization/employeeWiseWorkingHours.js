const getEmployeeWiseWorkingHours = (employees) => {
  const calculateWorkingHours = (checkInTime, checkOutTime) => {
    const checkIn = new Date(`01/01/2000 ${checkInTime}`);
    const checkOut = new Date(`01/01/2000 ${checkOutTime}`);
    const timeDiff = checkOut - checkIn;
    const hours = Math.floor((timeDiff % 86400000) / 3600000);
    const minutes = Math.round(((timeDiff % 86400000) % 3600000) / 60000);
    return `${hours} hours ${minutes} minutes`;
  };

  const workingHoursMap = new Map();

  employees.forEach((employee) => {
    const employeeID = employee["Employee ID"];
    const checkInTime = employee["Check-In Time"];
    const checkOutTime = employee["Check-Out Time"];

    const workingHours = calculateWorkingHours(checkInTime, checkOutTime);

    if (workingHoursMap.has(employeeID)) {
      const currentWorkingHours = workingHoursMap.get(employeeID);
      workingHoursMap.set(
        employeeID,
        `${currentWorkingHours} + ${workingHours}`
      );
    } else {
      workingHoursMap.set(employeeID, workingHours);
    }
  });

  workingHoursMap.forEach((value, key) => {
    console.log(`Employee ID: ${key}, Total Working Time: ${value}`);
  });
};

export default getEmployeeWiseWorkingHours;
