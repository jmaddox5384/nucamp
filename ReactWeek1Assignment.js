class student {
    constructor (name, email ,  community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class bootcamp{
    constructor  (name, level, student = []) {
        this.name = name;
        this.level = level;
        this.student = student;
    }
    registerStudent(student){
        const checkEmail = this.stundnt.filter(s = s.email === student.email)
        if(checkEmail.length){
            console.log("email already exists");

        }else{
            let addEmail = this.student.push 
        }
        
        
        
        
        

        

    }
}
