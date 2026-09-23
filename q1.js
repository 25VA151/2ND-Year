class student{
    constructor(rollNo,Name,Marks)
    {
        this.rollNo = rollNo;
        this.name=Name;
        this.marks=Marks;

    }
    displayResult(){
        console.log("rollno:",this.rollNo);
        console.log("Name",this.name);
        console.log("Marks",this.marks)
        if(this.marks>=50){
            console.log("result:pass")
        }
        else{
            console.log("result:fail")
        }
    }
            static totalstudents(){
                console.log(this.rollNo,this.name,this.marks);
                console.log("Total students:",student.count);
            }
}
let s1=new student(1,"Yash",98);
s1.displayResult();
student.totalstudents