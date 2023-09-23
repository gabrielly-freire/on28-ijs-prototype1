function Account(numberAccount, agencyNumber, balance){
    let account = Object.create(Account.prototype);

    account.numberAccount = numberAccount;
    account.agencyNumber = agencyNumber;
    account.balance = balance;

    return account;
}

Account.prototype.credit = function credit(amount){
    this.balance+=amount;
    console.log(`O novo valor é de ${this.balance}`);
};

Account.prototype.debit = function debit(amount){
    if(this.balance >= amount){
        this.balance-=amount;
        console.log(`O novo valor é de ${this.balance}`);
    }else{
        console.log("Saldo insuficiente");
    }
    
};

Account.prototype.transferTo = function transferTo(anotherAccount, amount){
    if(this.balance>=amount){
        this.balance -= amount;
        anotherAccount.balance += amount;
        console.log(`Transferencia realizada com sucesso. Seu novo saldo é de ${this.balance}`);
    }else{
        console.log("Você não tem saldo suficiente para essa operacao")
    }
}

module.exports = {Account};