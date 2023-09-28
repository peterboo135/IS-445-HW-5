class Square{
  constructor(x){
    this.x = Number(x);
    
  }

  math1() {
    

    let perimeter= Number(this.x)*4

    
    
    return perimeter
  }

  math2() {

    let area = Number(this.x)**2
      
    return area
  }

  math3() {
    
    let diagonal = Math.sqrt(2*Number(this.x)**2)
    
    return  diagonal.toFixed(2)
  }


}


const side = new Square(5)


console.log(`Square with side 2 has a perimeter of ${side.math1()}, area of ${side.math2()}, and diagonal of ${side.math3()}.`
)
