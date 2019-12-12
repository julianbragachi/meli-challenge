module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': `${process.cwd()}/node_modules/jest-css-modules`,
      },
    
}