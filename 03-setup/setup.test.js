let animals = ['elephant', 'zebra', 'bear', 'tiger']

// runs once before all tests
beforeAll(() => {
    console.log("BEFORE ALL");
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

beforeEach(() => {
    console.log("BEFORE EACH")
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

// afterEach(() => {
//     console.log("AFTER EACH")
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

// afterAll(() => {
//     console.log("AFTER ALL")
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

describe("animals array", () => {
    // When beforeAll is placed inside the describe block the describe block
    // it runs only for the functions inside the block.
    // beforeAll(() => {
    //     console.log("BEFORE ALL");
    //     animals = ['elephant', 'zebra', 'bear', 'tiger']
    // })

    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator")
    })

    it("should add animal to the beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey")
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4)
    })
});

describe("testing something else", () => {
    // .only is usually used for debugging purposes
    // it.only("true should be truthy", () => {
    //     expect(true).toBeTruthy()
    // })
})