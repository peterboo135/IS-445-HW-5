const anArray = [];

for (i=1;i<=10;i++){
  anArray.push(i);
}

const oddNumbers = anArray.filter(x => x % 2===1);
console.log(oddNumbers);

const divBy2or5 = anArray.filter(x => x%2===0 || x%5 ===0);
console.log(divBy2or5);

const divBy3squared = anArray.filter(x => x % 3 ===0).map(y => y**2 );
console.log(divBy3squared);

const SumOfSquareDivBy5 = anArray.filter(x => x % 5 ===0).map(y => y**2).reduce((sum,z) => sum+2,0);
console.log(SumOfSquareDivBy5);