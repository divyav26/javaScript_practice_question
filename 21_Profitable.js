//Profitable 

function Profitable(prob, prize, pay)
{
    return prob*prize > pay
}
console.log(Profitable(2,4,9))