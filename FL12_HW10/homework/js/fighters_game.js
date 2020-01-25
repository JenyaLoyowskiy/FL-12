function Fighter(player){
    let { name, damage, hp, strength, agility} = player,
        history = {
            wins: 0,
            losses: 0
        },
        multiplier = 100;

    function attackPlayer(opponent){
        let attackChance = multiplier - (opponent.getAgility() + opponent.getStrength()),
            isAttackSuccessful = Math.floor(Math.random() * multiplier) <= attackChance;
        if (isAttackSuccessful) {
            console.log(`${name} make ${damage} damage to ${opponent.getName()}`);
            opponent.dealDamage(damage);
            if (opponent.getHealth() <= 0) {
                opponent.heal(Math.abs(opponent.getHealth()));
                this.addWin();
                opponent.addLoss();
            }
        } else {
            console.log(`${name} attack missed`)
        }
    }
    return {
        getName: () => name,
        getDamage: () => damage,
        getHealth: () => hp,
        getStrength: () => strength,
        getAgility: () => agility,
        attack: attackPlayer,
        logCombatHistory: () => console.log(`Name: ${name}, Wins: ${history.wins}, Loses: ${history.losses}`),
        heal: health => {
            hp += health 
        },
        dealDamage: damage => {
            hp - damage < 0 ? hp = 0 : hp -= damage
        },
        addWin: () => {
            console.log(`${name} has won!!!`)
            history.wins++;
        },
        addLoss: () => {
            history.losses++ 
        }
    }
}

function battle(player1, player2){
    if ( player1.getHealth() === 0 || player2.getHealth() === 0) {
        console.log( `${player1.getHealth() === 0 ? player1.getName() : player2.getName()} is dead and can't fight.`);
    } else {
        let switchTurn = false;
        while( player1.getHealth() !== 0 && player2.getHealth() !== 0 ) {
            switchTurn ? player1.attack(player2) : player2.attack(player1);
            switchTurn = !switchTurn;
        }
    }
}