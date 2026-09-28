class BankAccount{
    #balance = 0;
    deposit(money){
        this.#balance += money;
    }
    getBalance(){
        return this.#balance;
    }
}
const acc1 = new BankAccount();
console.log(acc1.getBalance());
acc1.deposit(100);
console.log(acc1.getBalance());
// console.log(acc1.#balance); // private field. 