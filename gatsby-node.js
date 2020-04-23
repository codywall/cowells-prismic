const fetch = require('node-fetch');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    // Fetch the data
    const res = await fetch(
      `http://magicseaweed.com/api/${process.env.GATSBY_MAGIC_SEAWEED_API_KEY}/forecast/?spot_id=4752/`
    );

    // Transform the data into json
    const data = await res.json();

    // Map over the result array, calling action.createNode on each item in the array
    data.forEach(report => {
      const node = {
        ...report, // We copy all of the properties from the report object
        id: createNodeId(`Surf-report-${report.timestamp}`), // Needs to be unique
        internal: {
          type: 'SurfReport',
          contentDigest: createContentDigest(report), // We pass in the report object to make sure it's unique
        },
      };

      // Create the actual data node
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }
};
