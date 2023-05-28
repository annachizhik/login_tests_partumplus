# login_tests_partumplus

## Technology stack 
* [Cypress] (https://www.cypress.io/)

## Local execution

1. Install dependencies:
    ```sh
    $ npm install
    ```

2. Run the tests:

    Headless:
    ```sh
    $ npx cypress run
    ```
    
    or using Cypress run tool:
    ```sh
    $ npx cypress open
    ```
    
    While tests runned in headless mode Cypress save video and screenshots to directories: 
    ```
    .
    ├── ...
    ├── cypress                   
    │   ├── videos          
    │   ├── screenshots         
    │   └── ...                
    └── ...
    
    ```
    
