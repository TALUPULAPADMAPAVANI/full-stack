console.log("===Hour 1:JSON Basics ===");

 let student={
    name:"Asha",
    age:21,
    marks:[85,90,78]
 }

 //convert object+json string
 let jsonString=JSON.stringify(student);
console.log("JSON string:",jsonString);

//convert JSON string+object
 let parseObj=JSON.parse(student);
console.log("Parsed Object:",parseObj);

//fetch sample JSON from API
fetch("https://jsonplaceholder.typicode.com/posts/1")
   .then(response => response.json()) //convert to json
   .then(data => console.log("Fetched Data:",data))
   .catch(error => console.error("Error:",error));



//fetch all the users and show in console+page
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        let output="<h3>User List</h3><ul>";
        users.forEach(user =>{
            output+=`<li>${user.name} - ${user.email}</li>`;
        });
        output +="</ul>";
        //Append result to page
        document.body.innerHTML += output;
    });
