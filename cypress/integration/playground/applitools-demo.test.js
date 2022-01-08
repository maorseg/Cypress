const baseUrlOne = "https://demo.applitools.com";
const baseUrlTwo = "https://demo.applitools.com/index_v2.html";

// Demo for Applitools three main methods:
// cy.eyesOpen to start the test
// cy.eyesCheckWindow to take screenshots (for each test step)
// cy.eyesClose to close the test

describe("AppTest", () => {

    it(`ultraFastTest`, function () {
       
        // run test vs. first url
        cy.visit(baseUrlOne);

        //run test vs . second url to detect visual bugs
        //cy.visit(baseUrlTwo);

        cy.eyesOpen({
            appName: 'Demo App',
            testName: 'Ultrafast grid demo',
        })

        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click()

        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
    });

});