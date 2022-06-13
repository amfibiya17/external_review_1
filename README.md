# Counter

Build a simple program, which will help teachers to generate report and sorting student test results.

Example of input: "Green, Green, Red, Amber, Red".  
Example of output: "Green: 2\nAmber: 1\nRed: 2".

---
## Input and Output for TDD

| INPUT | OUTPUT |
| ----- | ------ |
| `"Red"` | `"Red: 1"` |
| `"Amber"` | `"Amber: 1"` |
| `"Green"` | `"Green: 1"` |
| `Purple`  | `Uncounted: 1` |
| `Red, Red, Red` | `Red: 3` |
| `"Green, Green, Amber, Red, Pink, Purple, Blue, Red, Amber"` | `"Green: 2\nAmber: 2\nRed: 2n\nUncounted: 3"` |
