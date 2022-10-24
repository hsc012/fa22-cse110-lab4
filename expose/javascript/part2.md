1. The function will log the value of `prices.length`, which is "3" in this case, because the for-loops ends when `i` is `prices.length` and since `i` was declared as a `var` type its value can still be accessed outside of the for-loop.
2. The function will log "150", because `discountedPrice` is reset at the first line of the for-loop during each loop. It is set to `price[i]*(1-discount)`, which is `prices[i]*(0.5)`. During the last loop, price[i] = 300, so `discountedPrice` will be set to 150 at the end of the loop, right before it is logged.
3. The function will log "150", because during the last loop, `discountedPrice` will be 150, thus `finalPrice` will be `Math.round(150 * 100) / 100` which is 150. Since `finalPrice` was declared as a `var`, its value can be accessed throughout the function `discountedPrices(prices, discount)`.
4. It will return [50, 100, 150], because in the for-loop, newly calculated discount values are pushed to the end of `discounted` after every loop. In every loop, the discount value is calculated by taking the original price and multiplying it by 0.5, then multiplying it by 100, rounding it to the nearest integer, and dividing it by 100. For example, during the second loop, `discountedPrice` is 100 and `finalPrice` is 100, so 100 is pushed to `discounted` as the 2nd element in the array.
5. Error, because `i` was declared as `let` type in the for-loop, so it cannot be accessed outside the for-loop.
6. Error, because `discountedPrice` was declared as `let` type inside the for-loop, so it cannot be accessed outside the for-loop.
7. The function will log 150, because `finalPrice` was declared as `let` type outside of the for-loop, at the beginning of the function, so it can be accessed after the for-loop as well. During the last loop of the for-loop, it was given the value 150 in line 8.
8. The function will return [50, 100, 150], because `discounted` was declared as `let` type outside of the for-loop, at the beginning of the function, so it can be accessed after the for-loop as well. During every loop, a discounted value is pushed to the back of `discounted`.
9. Error, because `i` was declared as `let` type in the for-loop, so it cannot be accessed outside the for-loop.
10. The function will log 3, because `length` was declared `const` at the beginning of the function, outside of the for-loop, so it can still be accessed after the for-loop. It was initialized as the length of `prices`, which is 3.
11. It will return [50, 100, 150], because although `discounted` was declared as `const` it was not reassigned. That means elements can be pushed to `discounted` as long as it is not reassigned value.
12. Object:
    A. student.name
    B. student['Grad Year']
    C. student.function()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. Arithmetic:
    A. '32'; because '3' is string so 2 maps to its  string representation and is added to '3'
    B. 1; because in subtraction, both operands are converted to numbers
    C. 3; because 3 is an integer so null converts to 0
    D. '3null'; because '3' is a string so null maps to its string representation and is added to '3'
    E. 4; because true maps to 1
    F. 0; because false maps to 0 and null is also converted to 0
    G. '3undefined'; because '3' is a string so undefined maps to its string representation and is added to '3'
    H. NaN; because the value of undefined is NaN and subtraction can't be performed on NaN.
14. Comparison:
    A. true; because '2' is converted to the number 2
    B. false; because it compares the first character of both strings, and '2' > '1'.
    C. true; because '2' is converted to the number 2.
    D. false; because === compares data types too, and 2 and '2' have different data types.
    E. false; because true is converted to 1, and 1 != 2.
    F. true; because Boolean(2) converts to true since it is not a NaN or 0.
15. == compares values while === compares both values and the data types. In cases where types of operands are different, == converts types before comparison while === simply compares the data types.
16. [](part2-question16.js)
17. [2,4,6], because in `modifyArray()`, every value of `array`, which contains [1,2,3], is put in `doSomething()`, and the returned value is then pushed to `newArr`.
18. [](part2-question18.js)
19. 1 4 3 2