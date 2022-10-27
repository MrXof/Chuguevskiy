


describe('empty spec', () => {
  it('passes', () => {
    cy.request('GET','https://dummy.restapiexample.com/api/v1/employees')
    .its('status').should('equal',200);

it('get',()=>{
  cy.request('GET',"https://dummy.restapiexample.com/api/v1/employees")
  .its('body')
  .its('data')
  .should('not.be.empty')
  .should('deep.include',{
    id:1,
    employee_name:'Tiger Nixon',
    employee_salary:320800,
    employee_age:61,
    profile_image:""
  });
});

it('post',()=>{
  const bodyRequest = 	{"name":"test","salary":"123","age":"23"};
  const baseURL = 'https://dummy.restapiexample.com/api/v1/create'
cy.request('POST', `${baseURL}/create`,bodyRequest)
.its('body')
.its('massage').should('equal','Successfully! Record has been added.');
  });
});
it('testPOst',()=>{
  
  const body = {
    id: 15,
    category: {
      id: 4,
      name: "testName"
    },
    name: "Bob",
    photoUrls: [
      "https://"
    ],
    tags: [
      {
        id: 2,
        name: "pet"
      }
    ],
    status: "available"
  }
  const baseURL = 'https://petstore.swagger.io/#/pet';
  cy.request('POST',`${baseURL}/create`,body)
.its('status').should('eq',200);
  });


it.only('testGET',()=>{
  const status = {status : 'available'}
cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=available',status);
});

});