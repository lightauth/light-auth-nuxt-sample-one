// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      "vue/html-self-closing": "off",
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/no-unused-vars': 'off',
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  }
)
