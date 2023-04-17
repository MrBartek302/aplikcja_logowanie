const login = "admin"
const pass = "admin"

//funkcja służąca od logowania na stronie
function logowanie(){
   const formLogin = document.getElementById("login").value
   const formpass = document.getElementById("pass").value
//jeśli to co wpiszemy jest zgodne z naszymi stałymi to otrzymujemy alert zalogowano a w przeciwnym razie dostajemy alert Nie zalogowano
   if(formLogin==login && formpass==pass){
    alert("zalogowano")
    //dodajemy do localStorage klucz czyli "czy_zalogowany"(ten klucz może mieć dowolną nazwę) i jego wartość
    localStorage.setItem("czy_zalogowany", "true")
   }
   else{
    alert("Nie zalogowano")
    localStorage.setItem("czy_zalogowany", "false")
   }
   
}
//funkcja służąca do tego że jeśli jesteśmy zalogowani to mamy dostęp do strony admin a jeśli nie jesteśmy to cały czas przekierowywuje nas do logowania
function admin(){
    //tworzymy stałą która ma wartość klucza którego stworzyliśmy wcześnij i jesli ta wartość stałej jest inna niż true to przekierowywuje nas do logowania
   const czy_zalogowany = localStorage.getItem("czy_zalogowany")
   if(czy_zalogowany!="true"){
    window.location.href = "login.html"
   }
}