/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe("Function", function() {
  it("Function", function() {
    function Car(){
      this.color = "rouge";
    }
    var car = new Car();
    expect(typeof(car)).toEqual('object');
  });
  
  it("Function return object", function() {
    function Car(){
      this.color = "rouge";
      return {
          brand : 'lada'
      };
    }
    var car = new Car();
    expect(car).toEqual({brand: 'lada'});
    expect(typeof(car)).toEqual('object');
  });
});

