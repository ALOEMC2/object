
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates){
  var result = {};

  for(var i = 0; i < salesData.length; i++){
    var currentCompany = salesData[i]
    var totalSales = 0;

    for(var j = 0; j< currentCompany.sales.length; j++){
      totalSales += currentCompany.sales[j];
    }

    if (currentCompany.name in result) {
      result[currentCompany.name].totalSales += totalSales;
      result[currentCompany.name].totalTaxes += totalSales * salesTaxRates[currentCompany.province];
    } else {
      result[currentCompany.name] = {
        totalSales: totalSales,
        totalTaxes: totalSales * salesTaxRates[currentCompany.province]
      }
    }
  }

  return result;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates))





