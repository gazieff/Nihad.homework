function myperimeter() {
    let a = Number(prompt("uzunlugu daxil edin"));
    let b = Number(prompt("enini daxil edin"));
    let Z = a * b;
    console.log(Z);
}
myperimeter();

function reversenumber() {
    let Reverse = 0;
    let num = +prompt("reqemi daxil edin:");;
    let sonreqem;

    while (num != 0) {
        sonreqem = num % 10;
        Reverse = Reverse * 10 + sonreqem;
        num = Math.floor(num / 10);
    }

    console.log("Reverse number : " + Reverse);
}
reversenumber();



