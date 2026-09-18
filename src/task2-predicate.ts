// Тип банковской транзакции (пока без interface, используем type)
export type Transaction = {
  id: string;
  amount: number;
  type: "deposit" | "withdrawal";
};

// Напишите функцию-предикат isTransaction
// Она должна проверить:
// 1. Что data - это объект и не null
// 2. Что у data есть поля id, amount, type
// 3. Что id - это строка, amount - число, type - одна из двух строк
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

// Функция обработки. 
// Если data это транзакция - вернуть "Обработана транзакция на сумму <amount>"
// Иначе вернуть "Неизвестные данные"
export function processTransaction(data: unknown): string {
  // Напишите код здесь, используя isTransaction
  if (isTransaction(data) === true){
    return "Обработана транзакция на сумму " + data.amount
  }
  return "Неизвестные данные"
}