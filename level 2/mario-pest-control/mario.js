// adding logic to calculate the total of baddies caught 
const form = document.pestControl;
// const btn = document.getElementsByClassName['btn']

form.addEventListener('click', function(event){
    event.preventDefault()

    const bobOmb = form.bobOmb.value;
    const cheepCheep = form.cheepCheep.value;
    const goomba = form.goomba.value;

    let bobOmbPrice = bobOmb * 7 
    let cheepCheepPrice = cheepCheep * 11
    let goombaPrice = goomba * 5

    const total = bobOmbPrice + cheepCheepPrice + goombaPrice

    const totalPrice = document.createElement('p')
    totalPrice.textContent = total + " Coins"
    document.getElementsByClassName('totalPrice').append(totalPrice)
});