import { dirname, join } from "path";
module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],

  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions")
  ],

  "framework": {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  "features": {
    "storyStoreV7": true
  },

  docs: {
    autodocs: true
  },

  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Design-System/'
    }

    return config
  }
  
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}