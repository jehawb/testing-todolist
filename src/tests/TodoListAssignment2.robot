*** Settings ***
Documentation           Test to check RF environment w/ SeleniumLibrary & ChromeDriver.
Library         SeleniumLibrary   15.0   5.0

*** Variables ***
${Browser}      Chrome
${Sleep}	5

*** Test Cases ***
Open HH-homepage Test Case
        Open Browser    http://www.haaga-helia.fi       ${BROWSER}
	  Sleep	${SLEEP}
        Page Should Contain     Etusivu
	  Close Browser

*** Keywords ***