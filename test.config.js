module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest', { presets: ['@babel/preset-env'] }
    ]
  },
};

