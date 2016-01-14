/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe("TypeOf", function() {
  it("Typeof Number", function() {
    expect(typeof 37).toEqual('number');
  });
  
  it("Typeof Float", function() {
    expect(typeof 3.14).toEqual('number');
  });
  
  it("Typeof NaN", function() {
    expect(typeof NaN).toEqual('number');
  });
  
  it("Typeof Object", function() {
    expect(typeof {a:1}).toEqual('object');
  });
  
  it("Typeof Symbol", function() {
    expect(typeof Symbol()).toEqual('symbol');
  });
});

