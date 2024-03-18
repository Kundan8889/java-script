const course={
    coursename:"webdevlopment",
    price:3999,
    courseInstructor:"lovebabbar bhaiya"
}
//course.courseInstructor
//better way but option  hain use karo ya na karo to bhi theek hain bro
//yha par const {courseInstructor}=course ki jagah apni margi se kuch name de sakte hain like const {courseInstructor:codeHelp}=course
const {courseInstructor:codeHelp}=course
//ishe hame ye fyeda hain ki hame  course.courseInstructor nhi use karna padega
// console.log(courseInstructor);
console.log(codeHelp);
