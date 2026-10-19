const budget = 3000

function openForm(){
document.getElementById("expenseForm").style.display="block"
}

function closeForm(){
document.getElementById("expenseForm").style.display="none"
}

function addExpense(){

let title=document.getElementById("title").value
let amount=parseInt(document.getElementById("amount").value)

let expenses=JSON.parse(localStorage.getItem("expenses")) || []

expenses.push({title,amount})

localStorage.setItem("expenses",JSON.stringify(expenses))

closeForm()

loadExpenses()

}

function loadExpenses(){

let expenses=JSON.parse(localStorage.getItem("expenses")) || []

let list=document.getElementById("expenseList")

let total=0

list.innerHTML=""

expenses.forEach(e=>{

let li=document.createElement("li")

li.innerHTML=`${e.title} <span>₹${e.amount}</span>`

list.appendChild(li)

total+=e.amount

})

document.getElementById("balance").innerText="₹"+(budget-total)

document.getElementById("budgetInfo").innerText=`₹${total} spent of ₹${budget} budget`

document.getElementById("spentText").innerText=`Spent ₹${total}`

let percent=(total/budget)*100

document.getElementById("progressBar").style.width=percent+"%"

document.querySelector(".donut-text").innerHTML=`₹${total}<br><span>Total Spent</span>`

if(total>budget*0.7){
document.getElementById("insightText").innerText="⚠ You are close to your monthly budget."
}else{
document.getElementById("insightText").innerText="👍 Your spending is under control."
}

}

loadExpenses()