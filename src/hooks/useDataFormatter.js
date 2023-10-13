const useDataFormatter = (type, data) => {
  const employeeWiseWorkingHours = (employees) => {
    const calculateWorkingHours = (checkInTime, checkOutTime) => {
      const checkIn = new Date(`01/01/2000 ${checkInTime}`);
      const checkOut = new Date(`01/01/2000 ${checkOutTime}`);
      const timeDiff = checkOut - checkIn;
      return (timeDiff / 1000 / 60 / 60).toFixed(1);
    };
    const workingHoursArray = [];

    employees.forEach((employee) => {
      const employeeName = employee["Employee Name"];
      const checkInTime = employee["Check-In Time"];
      const checkOutTime = employee["Check-Out Time"];

      const totalHours = parseFloat(
        calculateWorkingHours(checkInTime, checkOutTime)
      );

      workingHoursArray.push({
        name: employeeName,
        value: totalHours,
      });
    });

    return workingHoursArray;
  };
  return type === "pie" ? employeeWiseWorkingHours(data) : {};
};

export default useDataFormatter;
