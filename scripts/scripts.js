function getTextValueInNum(elementId){
    const element = document.getElementById(elementId).innerText;
    const converted = parseInt(element);
   return converted;
}

const allSlot = document.getElementsByClassName('slot');

for (const seat of allSlot){
  seat.addEventListener("click",function(event){
    const seat = event.target.parentNode.childNodes[1].childNodes[1].innerText;
    const classType = event.target.parentNode.childNodes[1].childNodes[3].innerText;
    const price = event.target.parentNode.childNodes[1].childNodes[5].innerText;
    
    
    const limit = getTextValueInNum('total-seat');
    if(limit+1>4)
    {
      alert('Boundary exceeded!!')
    }
    event.target.style.backgroundColor = 'lightblue';

    const leftSeat = getTextValueInNum('left-seat');
    document.getElementById('left-seat').innerText = leftSeat-1;

    const selectNoSeat = getTextValueInNum('total-seat');
    document.getElementById('total-seat').innerText = selectNoSeat+1;


    const selectedSeat = document.getElementById('selected');
    const div = document.createElement("div");
    div.classList.add('flex')
    div.classList.add('justify-between')
    div.classList.add('p-4')
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = seat;
    p2.innerText = classType;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedSeat.appendChild(div);
    totalCost(price)
    grandtotal()

  })
}

function totalCost(value){

  const price = getTextValueInNum('total-price');
  const sum = price + parseInt(value);
  document.getElementById('total-price').innerText = sum;

}

function grandtotal(id){

  const price = getTextValueInNum('total-price');
  if(id == undefined){
   
    const grandPrice = document.getElementById('Grand-total');
    grandPrice.innerHTML = price;
  }

  else{
  const coupon = document.getElementById('coupon').value;
    
  if(coupon == 'NEW15'){
    const discount = price*0.15;
    const grandPrice = document.getElementById("Grand-total");
    grandPrice.innerHTML = price - discount;

  }
  else if(coupon == 'Couple 20'){
    const discount = price*0.2;
    const grandPrice = document.getElementById("Grand-total");
    grandPrice.innerHTML = price - discount;
  }

  else{
    alert('Enter a valid coupon code')
  }

}
}



