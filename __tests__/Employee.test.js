const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee('Alexis', '007', 'test@email.com');
    it("getName = name", () => {
        expect(employee.getName()).toEqual('Alexis');
    })
    it("getID = id", () => {
        expect(employee.getId()).toEqual('007');
    })
    it("getEmail = email", () => {
        expect(employee.getEmail()).toEqual('test@email.com');
    })
});