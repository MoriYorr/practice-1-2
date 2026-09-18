// Используем тип Transaction из прошлого задания (или скопируйте его сюда)
export type Transaction = {
  id: string;
  amount: number;
  type: "deposit" | "withdrawal";
};

// 1. Напишите предикат isTransaction (можно скопировать из task2)
export function isTransaction(data: unknown): data is Transaction {
  // Напишите код здесь
  if (data === null){
    return false
  } 
  if(typeof data === "object"){
    if ("id" in data && "amount" in data && "type" in data){
      if (typeof data.id === "string" && typeof data.amount === "number" && typeof data.id === "string" && (data.type === "deposit" || data.type === "withdrawal"))
        return true
      }
  }
  return false
}

// 2. Напишите функцию parseTransactions
// Принимает массив unknown[]
// Возвращает объект { valid: Transaction[], errors: string[] }
// Логика: пройтись по массиву. Если isTransaction(item) - добавить в valid.
// Иначе - добавить строку "Invalid item: <item>" в errors.
export function parseTransactions(rawData: unknown[]): { valid: Transaction[]; errors: string[] } {
  // Напишите код здесь
  let valid: Transaction[] = []
  let errors: string[] = []
  for (var i of rawData){
    if(isTransaction(i) === true){
      valid.push(i) 
    }
    else{
      errors.push("Invalid item: " + i)
    }
  }
  return {valid, errors}
}

// 3. Напишите функцию calculateBalance
// Принимает массив валидных транзакций.
// deposit прибавляет amount, withdrawal вычитает.
export function calculateBalance(transactions: Transaction[]): number {
  // Напишите код здесь
  let amount: number = 0
  for (var i of transactions){
    if (i.type === "deposit"){
      amount += i.amount
    }
    else{
      amount -= i.amount
    }
  }
  return amount
}