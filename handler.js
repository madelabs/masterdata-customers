'use strict';

module.exports.list = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'List of customers will return.'
    }),
  };
};

module.exports.single = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'A single customer will return.'
    }),
  };
};
