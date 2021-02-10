require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});
//const { createFilePath } = require(`gatsby-source-filesystem`);
/**
 * @fix load ts file in gatsby-node.js
 */
/*
const { getYomi, encodeArtistName } = require('./src/utils/sortByYomi.ts');
*/
exports.createSchemaCustomization = require('./gatsby-node/index').createSchemaCustomization;

exports.onCreateNode = require('./gatsby-node/index').onCreateNode;

exports.createPages = require('./gatsby-node/index').createPages;
/*
exports.createPages = async ({ graphql, actions, reporter }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  const { createPage } = actions;
  const result = await graphql(`
    query AllProgram {
      allProgram(sort: { fields: week, order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            title
            date(formatString: "YYYY-MM-DD")
            fields {
              slug
              image
            }
            week
          }
          previous {
            title
            date(formatString: "YYYY-MM-DD")
            fields {
              slug
              image
            }
            week
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // create Each Program Pages
  result.data.allProgram.edges.forEach(({ node, next, previous }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/program.tsx'),
      context: {
        previous,
        next,
        index,
        current: node,
        slug: node.fields.slug,
      },
    });
  });

  // create Artists Pages
  const artistResult = await graphql(`
    query AllArtists {
      allArtist(sort: { fields: sortName, order: ASC }, filter: { name: { ne: "スピッツ" } }) {
        edges {
          node {
            name
          }
          next {
            name
            image
            tunesCount
            programCount
          }
          previous {
            name
            image
            tunesCount
            programCount
          }
        }
      }
    }
  `);
  if (artistResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  artistResult.data.allArtist.edges.forEach(({ node, next, previous }, index) => {
    createPage({
      path: `/artist/${node.name}/`,
      component: path.resolve('./src/templates/artist.tsx'),
      context: {
        index,
        previous,
        next,
        name: node.name,
      },
    });
  });
};
*/