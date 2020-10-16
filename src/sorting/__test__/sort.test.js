import { selectionSort } from '../selectionsort';
import { insertionSort } from '../insertionsort';
import { bubbleSort } from '../bubblesort';
import { quickSort } from '../quicksort';
import { mergeSort } from '../mergesort';

const expectedSortedPositiveArray = [2, 3, 4, 6, 8, 10, 13];
const expectedSortedNegativeArray = [-13, -10, -8, -6, -4, -3, -2];
const expectedSortedMixedArray = [-8, -4, -3, 2, 6, 10, 13];

const testSorting = (sort, sortName) => {
  test(`Test ${sortName}`, () => {
    const positiveArray = [10, 4, 6, 8, 13, 2, 3];
    const negativeArray = [-10, -4, -6, -8, -13, -2, -3];
    const mixedArray = [10, -4, 6, -8, 13, 2, -3];

    expect(sort(positiveArray)).toStrictEqual(expectedSortedPositiveArray);
    expect(sort(negativeArray)).toStrictEqual(expectedSortedNegativeArray);
    expect(sort(mixedArray)).toStrictEqual(expectedSortedMixedArray);
    sort();
  });
};

const testInplaceSorting = (sort, sortName) => {
  test(`Test ${sortName}`, () => {
    const positiveArray = [10, 4, 6, 8, 13, 2, 3];
    const negativeArray = [-10, -4, -6, -8, -13, -2, -3];
    const mixedArray = [10, -4, 6, -8, 13, 2, -3];

    sort(positiveArray);
    expect(positiveArray).toStrictEqual(expectedSortedPositiveArray);

    sort(negativeArray);
    expect(negativeArray).toStrictEqual(expectedSortedNegativeArray);

    sort(mixedArray);
    expect(mixedArray).toStrictEqual(expectedSortedMixedArray);

    sort();
  });
};

testInplaceSorting(selectionSort, 'Selection Sort');
testInplaceSorting(insertionSort, 'Insertion Sort');
testInplaceSorting(bubbleSort, 'Bubble Sort');
testInplaceSorting(quickSort, 'Quick Sort');

testSorting(mergeSort, 'Merge Sort');