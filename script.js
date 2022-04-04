let selectedFood = null;
let selectedDrink = null;
let selectedDessert = null;

function sendMessage(){
  const food = selectedFood.querySelector(".title").innerHTML;
  const drink = selectedDrink.querySelector(".title").innerHTML;
  const dessert = selectedDessert.querySelector(".title").innerHTML;

  let price1 = selectedFood.querySelector(".price").innerHTML;
  let price2 = selectedDrink.querySelector(".price").innerHTML;
  let price3 = selectedDessert.querySelector(".price").innerHTML;

  price1 = parseFloat(price1.substring(2, price1.length).replace(',', '.'));
  price2 = parseFloat(price2.substring(2, price2.length).replace(',', '.'));
  price3 = parseFloat(price3.substring(2, price3.length).replace(',', '.'));

  console.log(price1, price2, price3);

  const str = `Olá, gostaria de fazer o pedido: -Prato: ${food} - Bebida: ${drink} - Sobremesa: ${dessert} Total: R$ ${(price1+price2+price3).toFixed(2)}`;
  encodeURI(str);
  window.open(`https://wa.me/5588998240824?text=${str}`);
}

function activateButton(){

  const button = document.querySelector(".finish-button");

  if(selectedFood !== null && selectedDrink !== null && selectedDessert !== null){
   
    button.removeAttribute("disabled");
    button.innerHTML = "Fechar Pedido";
    button.classList.add("able");

  }else{
    button.setAttribute("disabled", "disabled");
    button.innerHTML = "Selecione os 3 itens para fechar o pedido";
    button.classList.remove("able");
  }
  
}

function selectFood(op){
  const opSelected = document.querySelector(".food").querySelector(".selected");
  if (opSelected !== null){
    opSelected.classList.toggle("selected");
    opSelected.querySelector(".checked").classList.add("unchecked");
  }
  if (opSelected !== op){
    op.classList.add("selected");
    op.querySelector(".checked").classList.remove("unchecked");
    selectedFood = op;
  } else {
    selectedFood = null;
  }
  
  activateButton();
}

function selectDrink(op){
  const opSelected = document.querySelector(".drink").querySelector(".selected");
  if (opSelected !== null){
    opSelected.classList.toggle("selected");
    opSelected.querySelector(".checked").classList.add("unchecked");
  }
  if (opSelected !== op){
    op.classList.add("selected");
    op.querySelector(".checked").classList.remove("unchecked");
    selectedDrink = op;
  } else {
    selectedDrink = null;
  }
  
  activateButton();
  
}

function selectDessert(op){
  const opSelected = document.querySelector(".dessert").querySelector(".selected");
  if (opSelected !== null){
    opSelected.classList.toggle("selected");
    opSelected.querySelector(".checked").classList.add("unchecked");
  }
  if (opSelected !== op){
    op.classList.add("selected");
    op.querySelector(".checked").classList.remove("unchecked");
    selectedDessert = op;
  } else {
    selectedDessert= null;
  }
  
  activateButton();
  
}


