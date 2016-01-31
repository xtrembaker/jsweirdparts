/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe("Scope", function() {
  it("Typeof Number", function() {
    (function(){
        var a = b = c = 5;
    });
    console.log(b);// b exists in Window (c also), not a.
  });
});

