/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe("Truthiness / Falseness - String", function() {
  it("String with character", function() {
    var truthiness = false;
    if("a"){
      truthiness = true;
    }
    expect(truthiness).toBe(true);
  });
  it("empty String", function() {
    var truthiness = false;
    if(""){
        truthiness = true;
    }
    expect(truthiness).toBe(false);
  });
});
describe("Truthiness / Falseness - Number", function() {
  it("Number 0", function() {
    var truthiness = false;
    if(0){
        truthiness = true;
    }
    expect(truthiness).toBe(false);
  });
  
  it("Number > 0", function() {
    var truthiness = false;
    if(3){
        truthiness = true;
    }
    expect(truthiness).toBe(true);
  });
  
  it("Number < 0", function() {
    var truthiness = false;
    if(-4){
        truthiness = true;
    }
    expect(truthiness).toBe(true);
  });
});

describe("Truthiness / Falseness - Array", function() {
  it("Array", function() {
      var truthiness = false;
      if([]){
          truthiness = true;
      }
    expect(truthiness).toBe(true);
  });
});

describe("Truthiness / Falseness - Object", function() {
  
  it("Object", function() {
      var truthiness = false;
      if({}){
          truthiness = true;
      }
    expect(truthiness).toBe(true);
  });
  
});

describe("Truthiness / Falseness - Null", function() {
  it("Null", function() {
      var truthiness = false;
      if(null){
          truthiness = true;
      }
    expect(truthiness).toBe(false);
  });
});

describe("Truthiness / Falseness - undefined", function() {
  it("undefined", function() {
      var truthiness = false;
      if(undefined){
          truthiness = true;
      }
    expect(truthiness).toBe(false);
  });
  
});