const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const resolve = require("path").resolve;
const {
  injectBabelPlugin,
  getBabelLoader,
  getLoader,
  loaderNameMatches
} = require("react-app-rewired");

module.exports = function override(config, env) {

  const removeLoader = (rules, loader) => {
    const LoaderMatcher = function(rule) {
      return loaderNameMatches(rule, loader);
    };
    let loaderObj = getLoader(rules, LoaderMatcher)

    const removeLoaderRecursive = (rules) => {
      rules.forEach((rule,index) => {
        if(rule.loader){
          if(loaderObj.loader == rule.loader){
            rules.splice(index,1)
          }
        }else if(rule.use){
          removeLoaderRecursive(rule.use)
        }else if(rule.oneOf){
          removeLoaderRecursive(rule.oneOf)
        }
      })
    };

    removeLoaderRecursive(rules)
  }

  //remove default ts-loader
  removeLoader(config.module.rules, "ts-loader");

  // Emotion babel plugin
  config = injectBabelPlugin(
    [
      "emotion",
      {
        autoLabel: true,
        sourceMap: true
      }
    ],
    config
  );

  //Get babelLoader and modify to use on all filetypes and run ts-loader afterwards.
  let babelLoader = getBabelLoader(config.module.rules);
  babelLoader.test = /\.(js|jsx|mjs|ts|tsx)$/;
  babelLoader.use = [
    {
      loader: babelLoader.loader,
      options: babelLoader.options
    },
    {
      loader: require.resolve("ts-loader"),
      options: {
        // disable type checker - we will use it in fork plugin
        transpileOnly: true
      }
    }
  ];
  delete babelLoader.loader;
  delete babelLoader.options;

  if (env === 'development') {
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  }
  config = rewireReactHotLoader(config, env);
  return config;
};