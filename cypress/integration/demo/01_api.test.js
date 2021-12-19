/// <reference types="Cypress" />

let WeatherCall = "/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=17b7e1cec99e6068f56ff1c4894dcf22";

describe('Given I send API get request to the app', () => {
      it('Then it should return valid response', () => {
            cy.request(`${WeatherCall}`)
              .should((response) => {
                  expect(response).to.have.property('headers')
                  expect(response).to.have.property('duration')
                  expect(response.status).to.eq(200)
                  cy.log(JSON.stringify(response.body))
                  expect(response.body).to.be.a('object').and.not.be.empty
                  expect(response.body).to.contain
                  
                  ({
                    "lat":33.44,
                    "lon":-94.04,
                    "timezone":"America/Chicago",
                    "timezone_offset":-21600
                  })

               }) 
            })
          })
       
      
//     it('Test POST Request', () => {
//           cy.request({
//                method: 'POST',
//                url: 'https://reqres.in/api/users',
//                body: {
//                   "name": "morpheus",
//                   "job": "leader"
//               }
//           }).then((response) => { 
//              expect('Content-Type', /json/)
//              expect(200)
//              expect(response.body).has.property('name','morpheus'); 
//           })
//     })

//     it('Test PUT Request', () => {
//           cy.request({
//                   method: 'PUT',
//                   url: 'https://reqres.in/api/users/2',
//                   body: {
//                         "name": "morpheus",
//                         "job": "zion resident"
//                     }
//           }).then((response) => { 
//                   expect('Content-Type', /json/)
//                   expect(200)
//                   expect(response.body).has.property('job','zion resident'); 
//           })          
//     })  
    
//        it('Test DELETE Request', () => {
//           cy.request({
//                     method : 'DELETE',
//                     url: 'https://reqres.in/api/users/2'
//                     }).then((response) => {
//                       expect('Content-Type', /json/)
//                       expect(204)
//                       expect(response.body).to.be.empty;
//          })	
 //   })

