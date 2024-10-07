//UVM

//Properties:
    //Name: UVM
    const name = 'University of Vermont';
    const nameElement = document.getElementById('name');
    nameElement.textContent = name;
    //University Type: Public
    const collegeType = 'Public';
    const collegeTypeElement = document.getElementById('collegeType');
    collegeTypeElement.textContent = collegeType;
    //Number of students: 11,898
    let numStudents = 11898;
    let numStudentsElement = document.getElementById('numStudents');
    numStudentsElement.textContent = numStudents;
    //Founding Date: 1791
    const foundingDate = 1791;
    const foundingDateElement = document.getElementById('foundingDate');
    foundingDateElement.textContent = foundingDate;
    //Location: Burlington, Vermont
    const area = "Burlington, Vermont";
    const areaElement = document.getElementById('area');
    areaElement.textContent = area;
    //Tuition in state or out of state
    const isOut = true;
    const outClass = isOut ? 'out' : 'in';
    const isOutElement = document.getElementById('isOut');
    isOutElement.textContent = isOut;
    isOutElement.className = outClass;
    //Number of majors offered: 150
    let majors = 150;
    let majorsElement = document.getElementById('majors');
    majorsElement.textContent = majors;
    //Number of courses offered: 500
    let courses = 500;
    let coursesElement = document.getElementById('courses');
    coursesElement.textContent = courses; 