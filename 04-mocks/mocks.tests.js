const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(results)
    return results.data;
}

const forEach = (items, callback) => {
    for(let i = 0; i < items.length; i++){
        callback(items[i])
    }
}

it("mock callback", () => {
    const mockCalledback = jest.fn(x => 42 + x);

    forEach([0,1], mockCalledback);

    expect(mockCalledback.mock.calls.length).toBe(2)

    expect(mockCalledback.mock.calls[1][0]).toBe(1)
})

it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true);

    const results = mock();

    expect(results).toBe(true)
})

it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Get 1M Subs"
        }
    })
    const results = await fetchData(1);

    expect(results).toBe("Get 1m Sub")
})