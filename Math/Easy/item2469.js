/* 
- Name: 2469. Convert the Temperature
- Description: You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
- My line of thought: Just apply the conversion formulas:
  - Kelvin = Celsius + 273.15
  - Fahrenheit = Celsius * 1.8 + 32
- Time complexity: O(1)
- Space complexity: O(1)
*/

function convertTemperature (celsius) {
    return [celsius + 273.15, celsius * 1.8 + 32]
};