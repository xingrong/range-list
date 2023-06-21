import { RangeList } from "../src/range-list";

describe('Test Range List logic', () => {

    test('Test empty range list', async () => {
        const rangeList: RangeList = new RangeList();
        const rangeListString: string = rangeList.toString();

        expect(rangeListString).toEqual("");
    });

    test('Test add a range to the list', async () => {
        const rangeList: RangeList = new RangeList();

        rangeList.add([1, 5]);
        expect(rangeList.toString()).toEqual("[1, 5)");

        rangeList.add([10, 20]);
        expect(rangeList.toString()).toEqual("[1, 5) [10, 20)");

        rangeList.add([20, 20]);
        expect(rangeList.toString()).toEqual("[1, 5) [10, 20)");

        rangeList.add([20, 21]);
        expect(rangeList.toString()).toEqual("[1, 5) [10, 21)");

        rangeList.add([2, 4]);
        expect(rangeList.toString()).toEqual("[1, 5) [10, 21)");

        rangeList.add([3, 8]);
        expect(rangeList.toString()).toEqual("[1, 8) [10, 21)");
    });

    test('Test remove a range from the list', async () => {
        const rangeList: RangeList = new RangeList();
        rangeList.add([1, 8]);
        rangeList.add([10, 21]);

        rangeList.remove([10, 10]);
        expect(rangeList.toString()).toEqual("[1, 8) [10, 21)");

        rangeList.remove([10, 11]);
        expect(rangeList.toString()).toEqual("[1, 8) [11, 21)");

        rangeList.remove([15, 17]);
        expect(rangeList.toString()).toEqual("[1, 8) [11, 15) [17, 21)");

        rangeList.remove([3, 19]);
        expect(rangeList.toString()).toEqual("[1, 3) [19, 21)");
    });
})