const FlyBehaivor = require('./interfaces/fly');
const QuackBehaivor = require('./interfaces/quack');
const flyBehavior = new FlyBehaivor();
const quackBehaivor = new QuackBehaivor();
class Duck {

    performFly() {
        return flyBehavior;
    }
    performQuack() {
        return quackBehaivor;
    }
    swim() {
        console.log('Yo puedo nadar');
    }
}

module.exports = Duck;