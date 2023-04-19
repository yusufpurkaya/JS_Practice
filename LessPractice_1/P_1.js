// vize 1 %30 - vize 2 %30 final = %40
// note > 60  => pass

document.writeln("your final note : ");
let selection=confirm("do you want to learn your note");

if(selection==true){
    let vize1=Number(prompt("enter first vize note"));
    let vize2=Number(prompt("enter second vize note"));
    let final=Number(prompt("enter final note"));


    //let note=((vize1*(3/10))+(vize2*(3/10))+(final*(4/10)));
    let note=(vize1*0.3)+(vize2*0.3)+(final*0.4);

    document.writeln("your final note : "+note);

    if(note>=60){
console.warn(" congrulation you PASS");
alert(" congrulation you PASS");
    }else{
        console.warn(" :(  sorry you must work more "); // on the console
        alert(" :(  sorry you must work more ")
    }

}else{
    document.writeln("you dont want to learn final note");
}