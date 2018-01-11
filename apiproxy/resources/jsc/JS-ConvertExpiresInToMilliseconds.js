var expiresInSeconds = context.getVariable("L7AccessTokenExpiration"); // Returns the variable value
var expiresInMillis = expiresInSeconds * 1000;
context.setVariable("L7AccessTokenExpirationInMills", expiresInMillis.toString());
