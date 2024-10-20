const findMedianSortedArrays = (nums1, nums2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i++]);
    } else {
      result.push(nums2[j++]);
    }
  }

  while (i < nums1.length) result.push(nums1[i++]);
  while (j < nums2.length) result.push(nums2[j++]);

  let mid = Math.floor(result.length / 2);

  if (result.length % 2 === 0) {
    return (result[mid - 1] + result[mid]) / 2;
  } else {
    return result[mid];
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2]));
