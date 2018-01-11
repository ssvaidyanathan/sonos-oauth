# sonos-oauth
This is a demo OAuth proxy built for Sonos

The plugin used to deploy is [apigee-deploy-maven-plugin](https://github.com/apigee/apigee-deploy-maven-plugin)

This build script (pom) does the following
* Static Code Analysis
* Unit Test
* Code Coverage
* Package and deploy to Apigee Edge
* Functional Test

Run the following command

```
mvn clean install -P{profile} -Dorg={org} -Dusername={edge_user} -Dpassword={edge_password}

```
