module.exports = {
    
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    
    testRegex: "(/src/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testURL: "http://localhost/",
    collectCoverage: true,
};