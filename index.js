let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map((student)=>{
        if(student.marks>50){
            console.log(student);
        }
    })
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach((student)=>{
        if(student.marks>50){
            console.log(student);
        }
    })
  }
  
  function addData() {
    let newStudent = {id:4,name:"susan",age:20,marks:45};
    arr.push(addData);
    console.log(newStudent);

  }
  
  function removeFailedStudent() {
    arr = arr.filter(function(student){
        if(student.marks>50){
            return student;
        }
    })
    console.log(arr)
  }
  
  function concatenateArray() {
    let newarr = [
        { id: 6, name: "vidya", age: "12", marks: 94 },
        { id: 7, name: "vaishali", age: "23", marks: 67 },
        { id: 8, name: "shivani", age: "22", marks: 54 },
      ];
      

    let newarray = [];
    arr.forEach((emp)=>{
        newarray.push(emp)
    })
    newarr .forEach((emp)=>{
        newarray.push(emp)
    })
    console.log(newarray)
  }