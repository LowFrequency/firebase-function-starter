const Ajv = require('ajv');
const { log } = require('firebase-functions/lib/logger');

/**
 * Validate json structure
 * @param jsonSchema Json schema containing the structure
 * @param jsonData Json data to validate
 * @returns {boolean} Return true if json is valid
 * @throws Throw new error if json is invalid
 */
const vaildateRequest = (expected, data) => {
  log('Validating json schema...');

  const ajvInstance = new Ajv();
  const valid = ajvInstance.validate(expected, data);

  if (!valid) {
    log(`Json schema is invalid: ${ajvInstance.errorsText()}`);
    throw new Error(`Json schema is invalid: ${ajvInstance.errorsText()}`);
  }

  log('Json schema is valid.');

  return valid;
};

module.exports = vaildateRequest;
