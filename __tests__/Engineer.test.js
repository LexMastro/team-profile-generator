const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const engineer = new Engineer('John', '008', 'engineer@email.com');
    it("getName = name", () => {
        expect(engineer.getName()).toEqual('John');
    })
    it("getID = id", () => {
        expect(engineer.getId()).toEqual('008');
    })
    it("getEmail = email", () => {
        expect(engineer.getEmail()).toEqual('engineer@email.com');
    })
    it("getGithub = github", () => {
        expect(engineer.getGithub()).toEqual('johnGithub');
    })
});