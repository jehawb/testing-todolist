*** Settings ***
Documentation           Test to check RF environment w/ SeleniumLibrary & ChromeDriver.
Library        SeleniumLibrary   15.0   5.0
Test Setup     Open App
Test Teardown    Close Browser

*** Variables ***
${Browser}      Chrome
${Sleep}	2

*** Test Cases ***
Add item to list
        Page Should Contain    Description
        Page Should Contain    Date
        Input Text             id=todo_description_input    TEST
        Input Text             id= todo_date_input   01/01/1970
        Click Button           xpath:(/html/body/div/div/div/form/fieldset/button)
        Page Should Contain    TEST
        Page Should Contain    1/1/1970

Check ToDo count
        Page Should Contain    ToDo count: 0
        Input Text             id=todo_description_input    TEST
        Input Text             id= todo_date_input   01/01/1970
        Click Button           xpath:(/html/body/div/div/div/form/fieldset/button)
        Page Should Contain    ToDo count: 1
        Click Button           xpath:(/html/body/div/div/div/table/tbody/tr/td[3]/button)
        Page Should Contain    ToDo count: 0

*** Keywords ***
Open App
        Open Browser    http://localhost:3000/      ${BROWSER}
	Sleep	${SLEEP}