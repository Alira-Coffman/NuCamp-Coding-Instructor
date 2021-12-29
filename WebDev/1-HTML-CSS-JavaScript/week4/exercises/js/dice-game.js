function rollDice()
{
    let goldCoins = 0;
    for(let i = 0; i < 10; i++)
    {
        alert(`You currently have ${goldCoins} gold coins`);
        const roll = Math.floor(Math.random() * 6) +1; //generate 1 - 6
        console.log(roll);
        alert(`You have rolled a ${roll}`);
        if(roll === 1)
        {
            alert('Game over, no more rolls');
            break;
        }
        else if(roll === 4 && goldCoins > 0)
        {
            alert('You have lost a coin');
            goldCoins-= 1;
            continue;
        }
        else if(roll < 5)
        {
            continue;
        }
        
        
        
        alert(`Congratulations, you win ${roll} gold coins`);
        goldCoins+= roll;
        
        
    }
    alert(`Game over! You have won ${goldCoins} coins`);
}