Feature: As a API consumer
         I want to generate an OAuth token using Password Grant type
         so that I can make other API calls

	#Positive OAuth token
	Scenario: Generate the OAuth token using valid password
		Given I set Content-Type header to application/x-www-form-urlencoded
		Given I have basic authentication credentials cb1f9c55-4087-4960-841c-a91b865aed64 and 79cad208-6864-41f6-9f5c-d2e1caa9d2c0
		Given I set body to username=sonos.test.user%40gmail.com&password=g%2BP%7DXNrfG23krJ&scope=playback-control-all&grant_type=password
		When I POST to /oauth/v2/token
		Then response code should be 200
		Then response body should be valid json

	#Negative OAuth token
	Scenario: Get an error message for an invalid credentials
		Given I set Content-Type header to application/x-www-form-urlencoded
		Given I have basic authentication credentials cb1f9c55-4087-4960-841c-a91b865aed64 and 79cad208-6864-41f6-9f5c-d2e1caa9d2c0
		Given I set body to grant_type=password&username=someUser&password=somepassword&scope=playback-control-all
		When I POST to /oauth/v2/token
		Then response code should be 401
		Then response body should be valid json

