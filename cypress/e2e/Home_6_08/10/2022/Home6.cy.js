describe('Home6',()=>{
    const accessToken ='Bearer f005b0b5c1232125789011ca7cb1155ca5aa31ce0b772a007c3259d442b42e9a';
    it('Home',()=>{
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            header:{
                Authorization : accessToken
            },
            body:{
                name: 'Danill',
                email: 'verulanedanill@gmail.com',
                status: 'active'
            }
        }).then((response)=>{
            expect(response).to.have.property('status',201);
        })
    })
})