const Manager = require("../lib/Manager");

describe("Manager", () => {
    const manager = new Manager('James', '006', 'manager@email.com', '1');
    it("getName = name", () => {
        expect(manager.getName()).toEqual('James');
    })
    it("getID = id", () => {
        expect(manager.getId()).toEqual('006');
    })
    it("getEmail = email", () => {
        expect(manager.getEmail()).toEqual('manager@email.com');
    })
    it("getOffice = Office", () => {
        expect(manager.getOffice()).toEqual('1');
    })
});