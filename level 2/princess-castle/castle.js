const readlineSync = require("readline-sync")
const status = ["Power Up", "Big", "Small", "Dead"]
const setName = ["Mario", "Luigi"]


class Player {
    constructor(name, totalCoins, status, hasStars){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStars = hasStars;
    }

}