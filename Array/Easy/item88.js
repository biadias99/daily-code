/* 
- Name: 88. Merge Sorted Array
- Description: Merge nums1 and nums2 into a single array sorted in non-decreasing order.
- My line of thought: While there are elements in nums2, compare the last elements of
nums1 and nums2, placing the larger one at the end of nums1. This way, we avoid
overwriting elements in nums1 that haven't been checked yet.
- Time complexity: O(n+m)
- Space complexity: O(1)
*/

function merge(nums1, m, nums2, n) {
    let i = m - 1; // ponteiro para o fim da parte válida de nums1
    let j = n - 1; // ponteiro para o fim de nums2
    let k = m + n - 1; // ponteiro para o fim total de nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
}