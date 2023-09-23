function Account(numberAccount, agencyNumber, balance, bankNumber){
    this.bankNumber = bankNumber;
    this.numberAccount = numberAccount;
    this.agencyNumber = agencyNumber;
    this.balance = balance;
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
    if(this.balance+10>=amount){
        if(this.bankNumber === anotherAccount.bankNumber){
            this.balance -= amount;
        }else{
            this.balance -= amount+10;
        }
        anotherAccount.balance += amount;
        console.log(`Transferencia realizada com sucesso. Seu novo saldo é de ${this.balance}`);
    }else{
        console.log("Você não tem saldo suficiente para essa operacao")
    }
}

Account.prototype.closeAccount = function closeAccount(){
    if(this.balance === 0){
        this.bankNumber = undefined;
        this.numberAccount = undefined;
        this.agencyNumber = undefined;
        this.balance = undefined;

        console.log("Conta encerrada com sucesso@");
    }else{
        console.log(`seu saldo é difirente de zero. Conta não encerrada. Saldo Atual: ${this.balance}`)
    }
}

module.exports = {Account};