/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe("Comparison Assert - 1", function() {
  it("Compare two equal string", function() {
    expect("a" == "a").toBe(true);
  });
  
  it("Compare two different string", function() {
    expect("a" == "b").toBe(false);
  });
  
  it("Compare Number and String", function() {
      var truthiness = false;
      if([]){
          truthiness = true;
      }
    expect(truthiness).toBe(true);
  });
  
  it("Compare Number and 'Number'", function() {
    var a = 3;
    var b = Number(3);
    expect(a === b).toBe(true);
    var c = new Number(3);
    expect(a === c).toBe(false);
  });
  
  it("Object", function() {
    var truthiness = false;
    if({}){
        truthiness = true;
    }
    expect(truthiness).toBe(true);
  });
  
  it("Null", function() {
      var truthiness = false;
      if(null){
          truthiness = true;
      }
    expect(truthiness).toBe(false);
  });
  
  it("undefined", function() {
      var truthiness = false;
      if(undefined){
          truthiness = true;
      }
    expect(truthiness).toBe(false);
  });
  
});
