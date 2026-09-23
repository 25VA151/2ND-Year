class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(amount + " deposited successfully.");
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance. Withdrawal not allowed.");
        } else {
            this.balance -= amount;
            console.log(amount + " withdrawn successfully.");
        }
    }

    displayBalance() {
        console.log("Account No: " + this.accountNo);
        console.log("Holder Name: " + this.holderName);
        console.log("Balance: ₹" + this.balance);
    }

    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("Bank provides savings, deposits and withdrawal services.");
        console.log("Minimum balance and banking rules may apply.");
    }
}
BankAccount.bankInfo();

console.log("\n--- Account 1 ---");

let account1 = new BankAccount(101, "Yash", 10000);
account1.displayBalance();
account1.deposit(2000);
account1.withdraw(3000);
account1.displayBalance();
console.log("\n--- Account 2 ---");
let account2 = new BankAccount(102, "Rahul", 5000);
account2.displayBalance();
account2.deposit(1500);
account2.withdraw(8000);
account2.displayBalance();