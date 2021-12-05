console.log("Hello world!");
// reprezentuje cale drzewo html w JS
console.log(document);
// ES6 - standard deklaracji zmiennych
//  let -  mozna nadpisac
//const - nienadpisywalna
//var - 

// funkcja i nad nią wywolanie moze byc hoisting (JIT just in time)

//temporary dead zone
// console.log(number);
// let number=1;
//var moglibysmy powyżej nadpisac

//przypisanie headera do zmiennej
const headerContainer=document.querySelector(".topHeader");
//query selector bedimy przekazywac parametr. albo nazwa klasy z ., albo idika z hash, itd

// document.onscroll=function(){
//     console.log(document.documentElement.scrollTop)
// }

//"pobieramy" kontener main (<main>) do zmiennej

const mainContainer=document.querySelector("main");

document.onscroll=function () {
    if (document.documentElement.scrollTop>100) {
        headerContainer.classList.add("headerFixed");
        mainContainer.classList.add("mainMarginTop")
    } else {
        headerContainer.classList.remove("headerFixed");
        mainContainer.classList.remove("mainMarginTop")

        //nasluchujemy na event "submit" na formularzu

        
        
        
        
    }

}

//EEVENT -
//form przy[osikemy sekcje]
const form=document.querySelector("#contactForm");

form.addEventListener('submit',(event)=>{
    event.preventDefault(); //wy;aczenie domyslnego zachowania eventu. Za wysylke bedzie juz odpowiadal js a nie html
    console.log('event submit - bla bla');
    console.log(event.target[0].value)
})


