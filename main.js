
function ergebnis(operation){ //input
    document.getElementById ("result").innerHTML += operation;
}

function ende(){ //calculation
    let container = document.getElementById ("result");
    let result = eval(container.innerHTML);
    container.innerHTML = (result)

}

function AC(){ //Clear all
    let del = document.getElementById("result");
    del.innerHTML = ""
}

function del(){ //delete last
    let AC = document.getElementById ("result");
    if (AC.innerHTML.endsWith(" ")) {
        AC.innerHTML = AC.innerHTML.slice (0, -2);
    }
    if (AC.innerHTML.endsWith ("undefined")){
        AC.innerHTML = AC.innerHTML.slice (0, -15);
    }
    else{
    AC.innerHTML = AC.innerHTML.slice(0, -1);
}
}

function white(){ //Whitemode
    document.getElementById ("white").innerHTML = `
    td{
        background-color: rgba(255, 255, 255, 0.863);
        color: black;
    }
    .button :hover{
        background-color: wheat;
    }

    #result{
        background-color: white;
        color: black;
    }
    #gleich{
        background-color: rgba(245, 245, 245, 0.822);
        color: black;
    }
    `
};

function dark(){ //Darkmode
    document.getElementById ("white").innerHTML = `
    td{
        width: 25%;
        font-size: 24px;
        background-color: #17293a;
    }
    body{
        margin: 0;
    }
    table{
        background-color: #1a2f42;;
        color: white;
        width: 100%;
        height: 70vh;
        text-align: center;
    }
    
    #result{
        background-color: rgb(27, 20, 20);
        height: 30vh;
        color: white;
        font-size: 80px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    
    .button :hover{
        background-color: #0d1d2c;
        cursor: pointer;
    }
    #gleich{
        background-color: rgb(41, 41, 133);
    }
    `
}
