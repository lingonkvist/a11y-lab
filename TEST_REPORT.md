# Test Report

<!--
    Commit this file to the root of your application's GitHub repository, alongside its code.
    Every requirement listed in your README.md needs at least one test case below. Giving each
    requirement a short ID in the README (e.g. R1, R2) makes the "Requirement" column easy to fill
    in and to check.
-->

## Summary

_Briefly describe how you tested your application – manually through its interface, automatically,
or both – clearly enough that someone else could carry out the same tests. What was hardest to
test, and why?_

Answer: All tests were performed manually by clicking through the application's interface in Chrome on Windows. Each test case describes the exact input and expected outcome, so repeating them is straightforward.

## Test Results

**Your test results:**

| Test case                   | Requirement | Input                                                  | Expected outcome                                    | Actual outcome |
| --------------------------- | ----------- | ------------------------------------------------------ | --------------------------------------------------- | -------------- |
| Select button component     | R1          | Click "Button" in the components panel                 | Button appears on canvas                            | ✅ As expected |
| Select card component       | R1          | Click "Card" in the components panel                   | Card appears on the canvas, replacing the button    | ✅ As expected |
| Change canvas to gray       | R2          | Click the Gray swatch in the canvas bar                | Canvas background changes to gray                   | ✅ As expected |
| Custom canvas color         | R2          | Pick a color with the color picker in the canvas bar   | Canvas background changes to the picked color       | ✅ As expected |
| Change component background | R3          | Set background color to #0fabd2 in properties          | Component background turns blue                     | ✅ As expected |
| Change text color           | R4          | Set foreground color to #000000 in properties          | Component text turns black                          | ✅ As expected |
| Change font size            | R5          | Set font size to 24 in properties                      | Component text size increases                       | ✅ As expected |
| Change font weight          | R5          | Set font weight to 700 in properties                   | Component text becomes bold                         | ✅ As expected |
| Text contrast AA pass       | R6          | Set black (#000000) text on white (#ffffff) background | Text pill shows AA or higher with ratio 21.0:1      | ✅ As expected |
| Text contrast fail          | R6          | Set #787878 text on #ffffff background                 | Text pill shows Fail with ratio below 4.5:1         | ✅ As expected |
| Non-text contrast pass      | R7          | Set #ffffff component on #000000 canvas                | Non-text pill shows Pass with ratio 21.0:1          | ✅ As expected |
| Non-text contrast fail      | R7          | Set #ffffff component on #999999 canvas                | Non-text pill shows Fail with ratio below 3.0:1     | ✅ As expected |
| Target size AAA             | R8          | Set component size to 44x44 or larger                  | Size pill shows AAA                                 | ✅ As expected |
| Target size fail            | R8          | Set component size to 20x20                            | Size pill shows Fail                                | ✅ As expected |
| Export CSS                  | R9          | Click "Copy CSS" and paste into a text editor          | Valid CSS ruleset with current component properties | ✅ As expected |

## Known Issues in Third-Party Modules

_List any flaws you found in the other student's module that affected your application, how they
show up, and how you handled them (e.g. a workaround, or a link to an issue you filed in the
module's repository). Write "None found" if there weren't any._

Answer: None found.
