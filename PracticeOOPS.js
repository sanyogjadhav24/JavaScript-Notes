//Question 1 and 2:


let DATA="Secret Information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("Website Data= ",DATA);

    }
}


class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    
    editData(){
      
        DATA="Secret DATA changed";
    }

}


let student1=new User("sanny","sanny@gmail.com");
let student2=new User("pathya","pathya@gmail.com");
let student3=new User("sanyog","sanyogjad@gmail.com");

let teacher1=new User("Dean","dean@coll.com");

let admin1=new Admin("Admin","admin@college.com");

