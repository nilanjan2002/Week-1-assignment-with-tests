/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/**
  UNCOMMENT this to use as a test-case and also the conosle.logs
let array = [
    {
      "category": "Food",
      "price": 10
    },
    {
      "category": "Food",
      "price": 20
    },
    {
      "category": "Clothing",
      "price": 15
    },
    {
      "category": "Electronics",
      "price": 30
    },
    {
      "category": "Clothing",
      "price": 25
    }
  ]
**/

function calculateTotalSpentByCategory(transactions) {
  const results = [];
  transactions.forEach(transaction => {
    const categoryPrice = {
      "category":transaction.category,
      "totalSpent": transaction.price
    };
    if (categoryExists(transaction)) {
      //console.table({[transaction.category]: categoryExists(transaction)});
      updatePrice(transaction.category, transaction.price);
    } else {
      //console.table({[transaction.category]: categoryExists(transaction)});
      results.push(categoryPrice);
    }
    //console.log('results', results);
  });

  // checks if category exists in @results
  function categoryExists(transaction) {
    return results.some((result) => result.category === transaction.category);
  }

  // increments @totalSpent if category already exists in @results
  function updatePrice(category, price) {
    results.forEach(result => {
      if ( result.category === category) {
        result["totalSpent"] += price;
      }
    });
  }


  return results;
}

// console.log(calculateTotalSpentByCategory(array))

module.exports = calculateTotalSpentByCategory;
