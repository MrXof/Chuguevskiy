describe('empty spec', () => {
it('StorePost',()=>{
cy.request({
  method:'POST',
  url:'https://petstore.swagger.io/v2/store/order',
  body: {
    "id": 0,
    "petId": 0,
    "quantity": 0,
    "shipDate": "2022-10-08T16:01:12.585Z",
    "status": "placed",
    "complete": true
  }

}).then((yielded)=>{
  const id = yielded.body.id;
  const petId = yielded.body.petId;
  cy.log(petId);
  cy.log(id);
})
cy.request({
  method:'GET',
  url:`https://petstore.swagger.io/v2/store/order/${}`,
  body:{
      "id": 1,
      "petId": 0,
      "quantity": 0,
      "shipDate": "2022-08-04T05:36:01.686+0000",
      "status": "placed",
      "complete": true
  }
})
  
})
  
});