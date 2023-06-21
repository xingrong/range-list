# Implement a class named 'RangeList'

## Description
A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

## Methods
| Method     | Description                                              | Parameter                                                                        | Return                                    |
|------------|----------------------------------------------------------|----------------------------------------------------------------------------------|-------------------------------------------|
| add()      | Adds a range to the list                                 | {Array<number>} - Array of two integers that specify beginning and end of range. | N/A                                       |
| remove()   | Removes a range from the list                            | {Array<number>} - Array of two integers that specify beginning and end of range. | N/A                                       |
| toString() | Convert the list of ranges in the range list to a string | N/A                                                                              | A string representation of the range list |

## Unit Test Reports
```
 PASS  test/range-list.test.ts
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                   
 range-list.ts |     100 |      100 |     100 |     100 |                   
---------------|---------|----------|---------|---------|-------------------

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.343 s
```
