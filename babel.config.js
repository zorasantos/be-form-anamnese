module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@application/*': ['./src/application'],
          '@infra/*': ['./src/infra'],
          '@shared/*': ['./src/shared'],
        },
      },
    ],
  ],
}
