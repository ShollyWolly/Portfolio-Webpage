class FormSubmit {
    constructor(Form) {
        this.Form = Form;
        this.onSubmit();
    }
    onSubmit() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'Kontakt.json', true);
        let NameInput = document.querySelector("#name");
        let MailInput = document.querySelector("#email");
        let MessageInput = document.querySelector("#msg");
        let Fehler = document.querySelector("#ErrorMessage");

        xhr.onload = function(){
            if(NameInput.value === "" || MailInput.value === "" || MessageInput.value === "") {
                let newContent1 = JSON.parse(xhr.responseText);
                let newContent = newContent1[0].ErrorMessage;
                let node = document.createTextNode(newContent);
                // console.log(newContent, "Json file");
                // console.log(typeof(newContent), "Json file type");
                // console.log(typeof(Fehler.firstChild) , "First Child");
                
                if (String(Fehler.firstChild) != node) { //war object, musste als string formatiert werden

                    Fehler.classList.add("ErrorStyle"); 
                    
                    Fehler.appendChild(node); 

                    setTimeout(function(){
                        Fehler.removeChild(node);
                        Fehler.classList.remove("ErrorStyle");
                    },3000)

                } else {
                    console.log("nope") //testzwecke
                }

        } else {
            Form.submit();
        //  console.log("success");
            // NameInput.value = "";
            // MailInput.value = "";
            // MessageInput.value = "";
        } return // nicht benötigt, stand in Aufgabenstllung
        }

        xhr.send();
        
    };
}

let Form = document.querySelector(".myForm");
Form.addEventListener("submit", myfunction)

function myfunction(e) {
    e.preventDefault();
    new FormSubmit(Form)
}