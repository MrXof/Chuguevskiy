//<reference types="Cypress"/>
import{faker}from '@faker-js/faker';

describe('empty spec', () => {
  const accessToken ='Bearer 8f3a13ece1c4dcfbfbd85ad1065c33395f9929d17f54baf8eeb05a24ef3e3516';
  const generateEmail =faker.internet.email();
  it('passes', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v1/users',
      headers:{
               Authorization: accessToken
             },
       body:{
             name:"T1est N1ame",
             gender:"male",
             email: generateEmail,
             status:"active"
             }      
 }).then((response)=>{
    expect(response).to.have.property('status', 201); 
 }).then((response)=>{
  const userId = response.body.data.id;
  console.log('userId',userId);
 
  //const{id}=response.body.data;
/// public/v2/users/24
  cy.request({
    method:'GET',
    url:`https://gorest.co.in/public/v2/users/${userId}`,
    headers:{
      Authorization:accessToken
    }
  })
  .then((responseUser)=>{
    expect(response).to.have.property('status',201);

  })

 })

    


 
  })

})