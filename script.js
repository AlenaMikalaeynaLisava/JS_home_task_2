let Student1={
    FirstName:"Boris",
    LastName:"Vasiliev",
    Age:18,
    Grades:[1,5,3,4,1],
    Course:1,
    Gender:"male",
};
let Student2={
    FirstName:"Mikhael",
    LastName:"Sobolev",
    Age:17,
    Grades:[1,3,3,3,2],
    Course:1,
    Gender:"male",
};
let Student3={
    FirstName:"Viktoria",
    LastName:"Von",
    Age:20,
    Grades:[0,5,3,0,5],
    Course:3,
    Gender:"female",
};
let Student4={
    FirstName:"Anna",
    LastName:"Samsonova",
    Age:22,
    Grades:[2,2,3,1,4],
    Course:5,
    Gender:"female",
};
let Student5={
    FirstName:"Ivan",
    LastName:"Smirnov",
    Age:22,
    Grades:[2,5,4,5,4],
    Course:5,
    Gender:"male",
};
let Student6={
    FirstName:"Simon",
    LastName:"Bol",
    Age:20,
    Grades:[2,2,3,1,1],
    Course:2,
    Gender:"male",
};
let Student7={
    FirstName:"Mariya",
    LastName:"Gabor",
    Age:25,
    Grades:[2,2,3,3,4],
    Course:2,
    Gender:"female",
};
let Student8={
    FirstName:"Mirriz",
    LastName:"Hama",
    Age:22,
    Grades:[3,0,4,3,4],
    Course:5,
    Gender:"male",
};
let Student9={
    FirstName:"Dzimitrius",
    LastName:"Psimikakus",
    Age:26,
    Grades:[4,2,2,3,3],
    Course:3,
    Gender:"male",
};
let Student10={
    FirstName:"David",
    LastName:"Ioffe",
    Age:21,
    Grades:[5,5,5,5,5],
    Course:5,
    Gender:"male",
};
let GroupOfStudents=[Student1,Student2,Student3,Student4,Student5,Student6,Student7,Student8,Student9,Student10];
let sum=0;

//console.log(GroupOfStudents);
for(let i=0; i<GroupOfStudents.length; i++){
    let sum=0;
    for(let j=0; j<GroupOfStudents[i]["Grades"].length;j++){
      sum=sum+GroupOfStudents[i]["Grades"][j];
    }
    if ((sum/GroupOfStudents[i]["Grades"].length<3)&&(GroupOfStudents[i]["Age"]<27)&&(GroupOfStudents[i]["Age"]>=18)&&(GroupOfStudents[i]["Gender"]==="male")){
        GroupOfStudents[i].isReadyForArmy="true";
        delete GroupOfStudents[i].Grades;
        delete GroupOfStudents[i].Course;
        //console.log(GroupOfStudents[i]);
    }
}

let Army=[];
for(let i=0; i<GroupOfStudents.length; i++){
    if (GroupOfStudents[i].isReadyForArmy==="true"){
            Army.push(GroupOfStudents[i]);
    }
}
console.log(Army);
