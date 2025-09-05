/* 
- Name: 11. Container With Most Water
- Description: Return the maximum amount of water a container can store.
- My line of thought: Select two pointers, one at the start and one at the
end of the array. Calculate the area formed between the two pointers,
update the maximum area if the current area is larger, and move the pointer
pointing to the shorter line inward to potentially find a taller line.
- Time complexity: O(n)
- Space complexity: O(1)
*/

function maxArea(height) {                
    let left = 0;
    let right = height.length - 1; 
    let maxWater = 0;                      

    while (left < right) {                 
        let width = right - left;           
        let h = Math.min(height[left], height[right]); 
        maxWater = Math.max(maxWater, width * h);    

        if (height[left] < height[right]) {   
            left++;                          
        } else {
            right--;                            
        }
    }

    return maxWater;                    
}