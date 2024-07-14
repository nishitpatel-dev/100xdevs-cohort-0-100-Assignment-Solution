/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let finalOutput = [];

  for (let i = 0; i < transactions.length; i++) {
    let flag = false;

    for (let j = 0; j < finalOutput.length; j++) {
      if (finalOutput[j].category == transactions[i].category) flag = true;
    }

    if (!flag) {
      let category = transactions[i].category;
      let totalSpent = transactions[i].price;

      finalOutput.push({ category, totalSpent });
    } else {
      finalOutput = finalOutput.map((item) => {
        let category = item.category;
        let totalSpent = item.totalSpent;
        if (item.category == transactions[i].category) {
          totalSpent += transactions[i].price;

          return { category, totalSpent };
        } else {
          return { category, totalSpent };
        }
      });
    }
  }

  return finalOutput;
}

module.exports = calculateTotalSpentByCategory;
