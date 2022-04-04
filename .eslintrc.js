module.exports = {
  env : {
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', //Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
      "vue/multi-word-component-names": ["error", {
          "ignores": ["About", "Home", "Header", "Movie", "Logo", "Headline", "Search", "Footer", "Loader"]
      }]
  }
}