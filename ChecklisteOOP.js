class TableLoader {
    constructor(Button) {
        this.Button = Button;
        this.opening();
    };

    opening() {
        console.log(this.Msg)
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'Nachrichten.json', true);

        xhr.onload = function() {
            let Msg = document.getElementById("Nachrichten");
            let Data = JSON.parse(xhr.responseText);

            let DataSet = new Set(Data); //removes all duplicate Values
            let MyData = [...DataSet];
            console.log(MyData);
            
            let NewVariable = "";
            let table = "<tr>" + "<th>"+ "Name" + "</th>" + "<th>" + "Email" + "</th>" + "<th>" + "Nachricht" + "</th>" + "</tr>";
            
            let i = 0
            for (i = 0; i< MyData.length; i++) {
                NewVariable += "<tr>" + "<td>"  + MyData[i].Name + "</td>" + "<td>" +  MyData[i].Email + "</td>" + "<td>"  + MyData[i].Message + "</td>" + "</tr>";
                //console.log(NewVariable)
            }
            let Finaltable = table + NewVariable;
            
            Msg.classList.remove("hide")
            console.log(Msg);
            Msg.insertAdjacentHTML("beforeend", Finaltable);
    }
    xhr.send()
    Button.classList.add("hide");
    };
    
};

let Button = document.getElementById("btn");
Button.addEventListener("click", myfunction);

function myfunction(e) {
    e.preventDefault();
    new TableLoader(Button)
}

let Button2 = document.getElementById("btn2");
Button2.addEventListener("click", myfunction2);

function myfunction2() {
    alert("Hello World!");
}