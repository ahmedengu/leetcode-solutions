/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
    return _.sum(getArr(employees, id));
};

const getArr = (employees: Employee[], id: number, arr = []): number[] => {
    const employee = employees.find(e => e.id === id);
    arr.push(employee.importance);
    employee.subordinates.forEach(sId => getArr(employees, sId, arr));
    return arr;
}
