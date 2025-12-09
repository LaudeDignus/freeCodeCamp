class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0 || isNaN(amount)) {
      return "Deposit amount must be a valid number greater than zero.";
    }

    this.transactions.push({ type: "deposit", amount });
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push({ type: "withdraw", amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const output = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => `$${t.amount}`)
      .join(", ");
    return `Deposits: ${output || "None"}`;
  }

  listAllWithdrawals() {
    const output = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => `$${t.amount}`)
      .join(", ");
    return `Withdrawals: ${output || "None"}`;
  }
}
