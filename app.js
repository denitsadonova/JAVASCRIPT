function solve(input) {
    const numberOfCharacters = Number(input.shift());
    let posse = {};

    for (let characters = 0; characters < numberOfCharacters; characters++) {
        let [name, currenthp, currentbullets] = input.shift().split(" ");
        posse[name] = {
             hp: Number(currenthp),
             bullets: Number(currentbullets) };
    }

    let commandLine = input.shift();
    while (commandLine != "Ride Off Into Sunset") {
        let command = commandLine.split(" - ").shift();
        const characterName = commandLine.split(" - ")[1];
        switch (command) {
            case "FireShot":
                const target = commandLine.split(" - ")[2];
                if (posse[characterName].bullets > 0) {
                    posse[characterName].bullets -= 1;
                    console.log(`${characterName} has successfully hit ${target} and now has ${posse[characterName].bullets} bullets!`)
                }
                else {
                    console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`)
                }
                break;
                case "TakeHit":
                    const damage = Number(commandLine.split(" - ")[2]);
                    const attacker = commandLine.split(" - ")[3];
                    const hpToTakeDemage = posse[characterName].hp;
                    posse[characterName].hp = hpToTakeDemage - damage;
                    if (posse[characterName].hp > 0) {
                        console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${posse[characterName].hp} HP!`)
                    } else {
                        console.log(`${characterName} was gunned down by ${attacker}!`)
                    delete posse.characterName;
                    }
                    break;
                    case "Reload":
                        let bulletsCount = posse[characterName].bullets;
                        if (bulletsCount > 6) {
                            posse[characterName].bullets = 6;
                            console.log(`${characterName} reloaded ${6 - bulletsCount} bullets!`)
                        } else {
                            console.log(`${characterName}'s pistol is fully loaded`)
                        }
                        break;
                        case "PatchUp":
                            const amount = commandLine.split(" - ")[2];
                            if (posse[characterName].hp === 100) {
                                console.log(`${characterName} is in full health!`)
                                break;
                            }
                            let totalAmount = amount + posse[characterName].hp;
                            if (totalAmount > 100) {
                                posse[characterName].hp = 100;
                                console.log(`${characterName} patched up and recovered ${100 - totalAmount} HP!"`)
                            } else {
                                posse[characterName].hp += amount;
                                console.log(`${characterName} patched up and recovered ${amount} HP!"`)
                            }
                            break;
        }
        commandLine = input.shift();
        }

        Object.entries(posse).forEach(([key, value]) => {
            if (value.hp > 0) {
            console.log(key);
            console.log(`HP: ${value.hp}`);
            console.log(`Bullets: ${value.bullets}`)
          }
})
}



solve(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"]);
