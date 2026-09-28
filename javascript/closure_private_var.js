function bankAccount(){
    let balance = 1000;
    return{

        deposit(amount){
            balance = balance+amount
        },
        withdraw(amount){
            if(balance<amount){
                // throw some error for insufficient balance
                console.log("Insufficient Balance");
            }else {
                balance = balance- amount;
            }
        },
        showbalance(){
            console.log("current balance",balance);
        }
    };
}
const account = bankAccount();
account.showbalance();
account.withdraw(1500);
account.showbalance();
account.withdraw(100);
account.showbalance();
account.deposit(1000);
account.showbalance();