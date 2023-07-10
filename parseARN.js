function parseARN(arn) {
    const arnRegex = /^arn:([^:]+):([^:]+):([^:]+):([^:]+)(?::([^\/]+)\/(.+))?$/;
    // Format arn:partition:service:region:account-id:resource-type/resource-path
    // Required:  partition, service, region, account-id 
    // Optional: resource-type, resource-path (Varies based on AWS service)
    const [, partition, service, region, accountId, resourceType, resourcePath] = arn.match(arnRegex);
  
    return {
      partition,
      service,
      region,
      accountId,
      resourceType,
      resourcePath,
    };
  }
  
  // Example usage
  const arnString = 'arn:aws:s3:us-east-1:123456789012:bucket-name/object-key';
  const parsedARN = parseARN(arnString);
  
  console.log(parsedARN);