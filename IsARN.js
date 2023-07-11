const arnRegex = /arn:[\w\-]+:([\w\-]+):([\w\-]+):([\w\-]+):([\w\-]+):?([\w\-/]+)?/g;

function extractARNsFromString(inputString) {
    const arns = inputString.match(arnRegex);
    return arns ? arns : [];
  }

// Example usage
const input = 'Here is an example ARN: arn:aws:s3:::my-bucket';
const foundARNs = extractARNsFromString(input);

console.log(foundARNs);