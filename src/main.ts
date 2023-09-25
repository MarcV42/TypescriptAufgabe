import './style.css'

let
    age : number = 13,

    username : string = "Marc",
    isAdmin: boolean = false;
    const score: number = 1;


for (let i : number = 0; i< age; i++){
    console.log(i)
}
if (age >= 18){
    console.log("is over 18")
}
else{
    console.log("is underage")
}

console.log(age);

if (score !== 0) {
    console.log('Score ist verfügbar.');
}


if (score) {
    console.log('Score wird als truthy ausgewertet.');
} else {
    console.log('Score wird als falsy ausgewertet.');
}


if (username) {
    console.log("Username " + username + " ist verfügbar.");
}


if (!username) {
    console.log('Username wird als falsy ausgewertet.');
}

if (isAdmin) {
    console.log('isAdmin wird als truthy ausgewertet.');
} else {
    console.log('isAdmin wird als falsy ausgewertet.');
}


if (!isAdmin) {
    console.log('isAdmin ist false.');
}
