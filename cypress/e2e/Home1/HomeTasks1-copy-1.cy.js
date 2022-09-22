//Напишите тест на страницу careers https://www.beaxy.com/careers/ ,
// где будут проверены все заголовки h1/h2/h3 на странице
//Напишите тест на страницу блог https://www.beaxy.com/blog/ ,
// где необходимо проверить первый пост. (наличие картинки и названия поста)


describe('CheckPage',()=>{
  beforeEach(()=>{
  cy.visit('https://www.beaxy.com/careers/');
});
it('Check',()=>{
  cy.get('//h1');


});
});