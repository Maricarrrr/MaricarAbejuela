function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    document.getElementById('age').value = age;
  }

    function calculateSalary() {
    const hoursWorked = parseFloat(document.getElementById('hours').value);
    const hourlyRate = parseFloat(document.getElementById('rate').value);

    const totalHoursElement = document.getElementById('totalHours');
    const salaryElement = document.getElementById('salary');
    const remarksElement = document.getElementById('remarks');

    const totalHours = hoursWorked.toFixed(2);
    const salary = (hoursWorked * hourlyRate).toFixed(2);

    totalHoursElement.textContent = totalHours;
    salaryElement.textContent = salary;

    // Remarks based on performance
    let remarks = '-';
  if (hoursWorked > 60) {
    remarks = 'Very Good Performance';
  } else if (hoursWorked > 50) {
      remarks = 'Good Performance';
  } else if (hoursWorked > 0) {
    remarks = 'Poor Performance';
  }

  remarksElement.textContent = remarks;
  }