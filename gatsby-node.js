const fetch = require('node-fetch');
require('dotenv').config()

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
    const { createNode } = actions

    try {
      console.log(`endpoint: ${process.env.GATSBY_MAGIC_SEAWEED_API_KEY}`)
      // Fetch the data
      const res = await fetch(`https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a7708806`);
  
      // Transform the data into json
      const data = await res.json();
      const nodeContent = JSON.stringify(data.forecast)
      console.log(data)
      const nodeMeta = {
        id: createNodeId(`surf-report-${data.key}`),
        parent: null,
        children: [],
        internal: {
          type: `SurfReport`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(data),
        },
      }
      const node = Object.assign({}, data, nodeMeta)
      console.log(node)
      createNode(node)
    } catch (error) {
      console.log(error);
    }
  };