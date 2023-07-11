

// Regex magic to tell if something is an ARN or not
const arnRegex = /arn:[\w\-]+:([\w\-]+):([\w\-]+):([\w\-]+):([\w\-]+):?([\w\-/]+)?/g;

// Format arn:partition:service:region:account-id:resource-type/resource-path
// Required:  partition, service, region, account-id 
// Optional: resource-type, resource-path (Varies based on AWS service)
const arnRegexOptional = /^arn:([^:]+):([^:]+):([^:]+):([^:]+)(?::([^\/]+)\/(.+))?$/;


//Find if something is or isnt an ARN
function isARN(maybeARN) {
    const arns = maybeARN.match(arnRegex);
    return arns ? arns : [];
  }


// Parse ARN string to get you all those jucy details in a format you can use
  function parseARN(arn) {

    const [, partition, service, region, accountId, resourceType, resourcePath] = arn.match(arnRegexOptional);
  
    return {
      partition,
      service,
      region,
      accountId,
      resourceType,
      resourcePath,
    };
  }



//Run a query to get all the data - give it a table name and coin for good luck
// Create a GlideRecord query for whatever table discovered items are in
var grDiscovery = new GlideRecord(tableName);

// Filter the discovered items to just those from Wiz
grDiscovery.addQuery('source', 'Wiz');

// Query fire one!
grDiscovery.query();

// Iterate, test if its in scope
while (grDiscovery.next()) {
    findingName = grDiscovery.getValue('name')
    if isARN(findingName) {
        parseARN(findingName);
        switch(expression) {
            case S3:
              // code block
              break;
            case y:
              // code block
              break;
            default:
              // code block
          }
    }
}