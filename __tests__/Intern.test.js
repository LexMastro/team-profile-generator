const Intern = require("../lib/Intern");

describe("Intern", () => {
    const intern = new intern('Jack', '009', 'intern@email.com');
    it("getName = name", () => {
        expect(intern.getName()).toEqual('Jack');
    })
    it("getID = id", () => {
        expect(intern.getId()).toEqual('009');
    })
    it("getEmail = email", () => {
        expect(intern.getEmail()).toEqual('intern@email.com');
    })
    it("getSchool = School", () => {
        expect(intern.getSchool()).toEqual('USYD');
    })
});