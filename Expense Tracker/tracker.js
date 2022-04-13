const form = document.querySelector('#form');
const tbody = document.querySelector('#tbody');
const table = document.querySelector('table');
let preName = document.querySelector('#name');
let preDate = document.querySelector('#date');
let preAmount = document.querySelector('.amount');
const totalAmountDisplayed = document.querySelector('#totalamount');




form.addEventListener('submit',(e)=>{

    e.preventDefault();
let newName = preName.value.trim();
let newDate = preDate.value.trim();
let newAmount = preAmount.value.trim();
let arr = [];
arr = document.getElementsByClassName('prices');
let arv = Array.from(arr);
let n = arv.innText;
console.log(n);



tbody.innerHTML +=`
 <tr>
    <td>${newName}</td>
    <td> ${newDate}</td>
    <td class ="prices" name = "array[]">${newAmount}</td>
    <td><button class ="delete">X</button></td>
</tr>
`
form.reset();
 arv.push(newAmount);
console.log(arv);
})

// click event on button to remove item
table.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
            e.target.parentNode.parentNode.remove();
    }
})




