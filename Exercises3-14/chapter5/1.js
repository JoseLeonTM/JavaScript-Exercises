/**
 * Created by Jose Leon on 2/14/2016.
 */

function bindPeople(context,method){
    return function(){
        var info = [document.getElementById("name").value,document.getElementById("lastName").value,
            parseInt(document.getElementById("money").value)];
        return context[method].apply(context,info);
    }
}
function bindClients(context,method){
    return function(){
        var info = [document.getElementById("person").value,parseInt(document.getElementById("balance").value)];
        return context[method].apply(context,info);
    }
}
function bindTransaction(context,method){
    return function(){
        var info = [document.getElementById("account").value,parseInt(document.getElementById("quantity").value),document.getElementById("account2").value];
        return context[method].apply(context,info);
    }
}



function Person(){
    this.newPerson=function(name,lastName,money){
        if(name && lastName) {
            var property=name+lastName;
            if(!this[property]) {
                if (!money) money = 0;
                this[property] = {
                    name: name,
                    lastName: lastName,
                    money: money
                };
                document.getElementById("result1").innerHTML =this[property].name +" "+this[property].lastName+" has been created with "
                    +this[property].money+" in his/her pocket.";
            }
        }
        else document.getElementById("result1").innerHTML = "Insufficient information";
    }
}
function Bank(){
    var id=0;
    var clientList={};

        this.newClient=function(person,amount){
            if (person) {
                var client = people[person];
                if (!people[person]) document.getElementById("result1").innerHTML = "This person does not exist";
                else {
                    if (!amount) amount = 0;
                    clientList[id++] = {
                        name: client.name,
                        lastName: client.lastName,
                        balance: amount
                    };
                    people[person].money -= amount;
                    document.getElementById("result1").innerHTML ="ID: " + (id - 1) +
                        "<br>Name: " + clientList[id - 1].name + "<br>Balance: " + clientList[id - 1].balance;
                }
            }
            else document.getElementById("result1").innerHTML ="Insufficient information";
        };
        this.deposit=function(sender,amount,receiver,fromPocket) {
            if (clientList[sender]) {///CHECKS IF THE SENDING CLIENT EXISTS
                if (amount > 0) { //CHECKS IF THE AMOUNT IF VALID
                    var client = clientList[sender].name + clientList[sender].lastName;
                    if (people[client].money >= amount && !receiver) { //IF NO OTHER CLIENT IS SPECIFIED THE DEPOSIT WILL BE MADE TO THE SAME CLIENT.
                        clientList[sender].balance += amount;
                        people[client].money -= amount;
                        document.getElementById("result1.2").innerHTML = clientList[sender].name + " deposited " + amount + " to his/her account." +
                            "<br> Balance: " + clientList[sender].balance
                            + "<br> Pocket: " + people[client].money;
                    }
                    else if (clientList[sender].balance >= amount && receiver && !fromPocket) {// IF A RECEIVER IS SPECIFIED THE FIRST CLIENT WILL DEPOSIT FROM THE BANK TO THE SECOND CLIENT.
                        if(clientList[receiver]) {////////////CHECKS IF THE RECEIVER CLIENT EXISTS
                            clientList[sender].balance -= amount;
                            clientList[receiver].balance += amount;
                            document.getElementById("result1.2").innerHTML = clientList[sender].name + " deposited " + amount + " to " + clientList[receiver].name + "'s account." +
                                "<br>" + clientList[sender].name + "'s Balance: " + clientList[sender].balance
                                + "<br>" + clientList[receiver].name + "'s Balance: " + clientList[receiver].balance;
                        }
                        else document.getElementById("result1.2").innerHTML = "There is no client with that ID";
                    }
                    else if (people[client].money >= amount && receiver && fromPocket) {
                        people[client].money -= amount;
                        clientList[receiver].balance += amount;
                    }
                    else {
                        document.getElementById("result1.2").innerHTML = "Insufficient funds";
                    }
                }
                else document.getElementById("result1.2").innerHTML = "Invalid amount";
            }
            else    document.getElementById("result1.2").innerHTML = "There is no client with that ID";
        };
        this.withdraw=function(clientNum,amount) {
            if (clientList[clientNum]) {
                if (clientList[clientNum].balance >= amount) {
                    clientList[clientNum].balance -= amount;
                    var client = clientList[clientNum].name + clientList[clientNum].lastName;
                    people[client].money += amount;
                    document.getElementById("result1.2").innerHTML = clientList[clientNum].name +" withdrawed "+amount+" from his/her account"+
                        "<br> Balance: "+clientList[clientNum].balance+
                        "<br>Pocket: "+ people[client].money;
                }
                else document.getElementById("result1.2").innerHTML ="Insufficient funds";
            }
            else
                document.getElementById("result1.2").innerHTML = "There is no client with that ID";
        };
        this.check=function(id){
            if(clientList[id])
            document.getElementById("result1.2").innerHTML = clientList[id].name + "'s balance is: "+clientList[id].balance;
            else
                document.getElementById("result1.2").innerHTML = "There is no client with that ID";
        }
    }

var people = new Person();
var ironBank = new Bank;

var newP = document.getElementById("createPerson");
    newP.addEventListener("click",bindPeople(people,"newPerson"),false);

var newC = document.getElementById("createClient");
    newC.addEventListener("click",bindClients(ironBank,"newClient"),false);

var Dep = document.getElementById("deposit");
    Dep.addEventListener('click',bindTransaction(ironBank,"deposit"),false);
var Wit = document.getElementById("withdraw");
    Wit.addEventListener('click',bindTransaction(ironBank,"withdraw"),false);
var Che = document.getElementById("check");
    Che.addEventListener('click',bindTransaction(ironBank,"check"),false);