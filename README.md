# Lab03 Holidays

[TOC]

## Due Date

Week 4 Monday 5:00 pm AEST

## Background 

### Rationale

Everybody loves holidays, and your client is no exception!

You have been approached with a problem - your client wishes to know which day of the week Christmas, Easter and Valentine's day would fall on in a particular year, regardless of whether it is in the past, present or future.

Being a clever and efficient software engineer, you knew that writing a date-time library yourself could only bring forth pain and suffering. Fortunately, the wheels do not need to be re-invented for you have recently acquired infinite wisdom through the [Node Package Manager (npm)](https://docs.npmjs.com/about-npm).

### Getting Started
- Please make sure you have completed `lab03_password` prior.
- Copy the SSH clone link from Gitlab and clone this repository on either VLAB or your local machine. 
- In your terminal, change your directory (using the `cd` command) into the newly cloned lab. To check if you have done this correctly, type `ls` in this new directory to see if you can see the relevant files (including [holidays.js](holidays.js)).


### Package Installation

1. Open [package.json](package.json) and look under the key `"devDependencies"`. We have added these development packages from `lab03_password` for you.

1. Quickly install the packages with the command:
    ```shell
    $ npm install # shortcut: npm i
    ```

1. Under `"scripts"`, make the following changes: 
    ```json
    "scripts": {
        "test": "jest",
    }
    ```

For this exercise, we will be using the following libraries:
- [date-fns](https://www.npmjs.com/package/date-fns) for parsing dates
- [date-fns-holiday-us](https://www.npmjs.com/package/date-fns-holiday-us) for useful holiday functions
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) for reading user input from the command line

1. You can install all three packages in one command with:
    ```shell
    $ npm i date-fns date-fns-holiday-us prompt-sync
    ```
1. Open [package.json](package.json) and ensure that these packages appear under the key `"dependencies"`, e.g
    ```json
    // Note: Your version number may differ
    "dependencies": {
      "date-fns": "^2.28.0",
      "date-fns-holiday-us": "^0.2.1",
      "prompt-sync": "^4.2.0"
    }
    ```
    
1. Use git status, add, commit and push your [package.json](package.json) and [package-lock.json](package-lock.json).


### Interface: Functions

<table>
  <tr>
    <th>Name & Description</th>
    <th>Parameters</th>
    <th>Return Type (Object)</th>
    <th>Errors</th>
  </tr>
  <tr>
    <td>
        <code>holidaysInRange</code><br /><br />
        Given a starting year and an ending year:
        <ul>
            <li>If <code>start</code> is not at least 325, return an empty array.</li>
            <li>If <code>start</code> is strictly greater than <code>end</code>, return an empty array.</li>
            <li>Otherwise, return an <code>object</code> containing information about the valentine,
          easter and christmas date strings in the given (inclusive) range.</li>
        </ul>
    </td>
    <td>
        (start, end)
    </td>
    <td>
        <code>holidaysArray</code>
    </td>
    <td>
        N/A
    </td>
  </tr>
  <tr>
    <td>
        <code>main</code><br /><br />
        Reads a starting year and an ending year from the user and display (with <code>console.log</code>) the
        values returned by the <code>holidaysInRange</code> function above.
        <br/><br/>
        Note:
        <ul>
            <li>
                See further below on some expected behaviour of the main function.
            </li>
        </ul>
    </td>
    <td>
        (start, end)
    </td>
    <td>
        <code>holidaysArray</code>
    </td>
    <td>
        N/A
    </td>
</table>

### Interface: Data Types
| Variable Name | Type |
| --- | --- |
| start | `number`, specifically integer |
| end | `number`, specifically integer |
| valentinesDay | `string`, e.g. "Sunday, 14.02.1971" |
| easter | `string`, e.g. "Sunday, 11.04.1971" |
| christmas | `string`, e.g. "Saturday, 25.12.1971" |
| holidaysArray | `Array` of objects, where each object contains the keys `{valentinesDay, easter, christmas}`.

## Task

### Writing Tests

In [holidays.test.js](holidays.js), complete a test suite for `holidaysInRange`. You should aim to cover *different* cases for the function.

You do not need to write tests for the `main` function.

You may find the following resource useful:
- https://www.calendar-365.com/holidays/1970.html
- Try changing `1970` to a different year in the link above

### Implementation

In [holidays.js](holidays.js), implement the function `holidaysInRange` according to its documentation.

This exercise is difficult to complete without using the libraries provided. You may want to spend some time reading the documentation for 
[date-fns](https://www.npmjs.com/package/date-fns) and [date-fns-holiday-us](https://www.npmjs.com/package/date-fns-holiday-us) before starting.

Ensure that your code passes all of the written tests before submitting it.


### Main - Reading Inputs from Commandline

In the `main` function, use [prompt-sync](https://www.npmjs.com/package/prompt-sync) to read the `start` and `end` year from the user and print the output of `holidaysInRange` to `stdout`. This function is imported and called in [main.js](main.js).

Note that `prompt-sync` reads inputs as strings, so you will need to use convert them to integers using `parseInt()`!

Here are a few examples (it is fine if your output differs by white space):
```shell
$ node main.js
Enter start: 1970                # NOTE: user enters 1970
Enter end: 1972                  # NOTE: user enters 1972
[
  {
    valentinesDay: 'Saturday, 14.02.1970',
    easter: 'Sunday, 29.03.1970',
    christmas: 'Friday, 25.12.1970'
  },
  {
    valentinesDay: 'Sunday, 14.02.1971',
    easter: 'Sunday, 11.04.1971',
    christmas: 'Saturday, 25.12.1971'
  },
  {
    valentinesDay: 'Monday, 14.02.1972',
    easter: 'Sunday, 02.04.1972',
    christmas: 'Monday, 25.12.1972'
  }
]
```

`Start` is less than 325:
```shell
$ node main.js
Enter start: 324
Enter end: 325
[]
```

## Tips

1. Avoid manually parsing the date string format yourself - use the provided libraries!
1. You may not use any libraries other than the ones listed unless mentioned otherwise by our course staff.

## Submission

- Use `git` to `add`, `commit`, and `push` your changes on your master branch.
- Check that your code has been uploaded to your Gitlab repository on this website (you may need to refresh the page).

**If you have pushed your latest changes to master on Gitlab no further action is required! At the due date and time, we automatically collect your work from what's on your master branch on Gitlab.**

## Additional Information

### Sample package.json

<details>

<summary>Click to view our sample package.json</summary><br/>

**Note**: 
1. The main keys to pay attention to are `"scripts"`, `"dependencies"` and `"devDependencies"`.
1. It is fine if the versions of your packages are newer.

```json
{
  "name": "lab03_holidays",
  "version": "1.0.0",
  "description": "[TOC]",
  "type": "module",
  "main": "holidays.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/preset-env": "^7.17.10",
    "jest": "^28.1.0"
  },
  "dependencies": {
    "date-fns": "^2.28.0",
    "date-fns-holiday-us": "^0.2.1",
    "prompt-sync": "^4.2.0"
  }
}
```

</details>
