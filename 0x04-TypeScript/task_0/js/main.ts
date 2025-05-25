interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Cyrus',
    lastName: 'Musau',
    age: 20,
    location: 'Nairobi'
}

const student2: Student = {
    firstName: 'Victor',
    lastName: 'wanyama',
    age: 25,
    location: 'Nairobi'
}

let studentList: Student[] = [student1, student2]

//function to render the table
const renderTable = (students: Student[]): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');

  // Create table header
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  // Create table rows for each student
  students.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
};

renderTable(studentList);
