/**
 * A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
 * A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)
 */
export class RangeList {
    rangeList: Array<Array<number>>;

    constructor() {
        this.rangeList = new Array<Array<number>>();
    }

    /**
     *
     * Adds a new range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add(newRange: Array<number>) {
        let newRangeLeft: number = newRange[0];
        let newRangeRight: number = newRange[1];
        let isPlaced: boolean = false;
        let newRangeList: Array<Array<number>> = new Array<Array<number>>();

        for (const range of this.rangeList) {
            if (range[0] > newRangeRight) {
                if (isPlaced === false) {
                    newRangeList.push([newRangeLeft, newRangeRight]);
                    isPlaced = true;
                }
                newRangeList.push(range);
            } else if (range[1] < newRangeLeft) {
                newRangeList.push(range);
            } else {
                newRangeLeft = Math.min(newRangeLeft, range[0]);
                newRangeRight = Math.max(newRangeRight, range[1]);
            }
        }

        if (isPlaced === false) {
            newRangeList.push([newRangeLeft, newRangeRight]);
        }

        this.rangeList = newRangeList;
    }

    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    remove(needRemovedRange: Array<number>) {
        const needRemovedRangeLeft: number = needRemovedRange[0];
        const needRemovedRangeRight: number = needRemovedRange[1];
        let newRangeList: Array<Array<number>> = new Array<Array<number>>();

        for (const range of this.rangeList) {
            const rangeLeft: number = range[0];
            const rangeRight: number = range[1];

            if (needRemovedRangeLeft >= rangeRight || needRemovedRangeRight <= rangeLeft) {
                newRangeList.push([rangeLeft, rangeRight]);
            } else {
                if (needRemovedRangeLeft > rangeLeft) {
                    newRangeList.push([rangeLeft, needRemovedRangeLeft]);
                }
                if (needRemovedRangeRight < rangeRight) {
                    newRangeList.push([needRemovedRangeRight, rangeRight]);
                }
            }
        }

        this.rangeList = newRangeList;
    }

    /**
     * Convert the list of ranges in the range list to a string
     * @returns A string representation of the range list
     */
    toString() {
        const rangeStringList: Array<string> = new Array<string>();
        const SEPARATOR: string = " ";

        for (const range of this.rangeList) {
            rangeStringList.push(`[${range[0]}, ${range[1]})`);
        }

        console.log(rangeStringList.join(SEPARATOR));

        return rangeStringList.join(SEPARATOR);
    }
}