/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const firstAndLast = [...numbers];
    numbers.length > 1
        ? firstAndLast.splice(1, numbers.length - 2)
        : firstAndLast;
    firstAndLast.length === 1
        ? firstAndLast.splice(1, 0, firstAndLast[0])
        : firstAndLast;
    return firstAndLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringToNum = numbers.map((num: string): number => Number(num));
    const deleteNaNs = stringToNum.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return deleteNaNs;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((amount: string): string =>
        amount[0] === "$" ? (amount = amount.slice(1, amount.length)) : amount
    );
    const stringToNum = noDollars.map((num: string): number => Number(num));
    const deleteNaNs = stringToNum.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return deleteNaNs;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestions = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    const upperExclamation = removeQuestions.map((message: string): string =>
        message.charAt(message.length - 1) === "!"
            ? (message = message.toUpperCase())
            : message
    );
    return upperExclamation;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const result = colors.reduce(
        (rgb: boolean, color: string): boolean =>
            (rgb = color === "red" || color === "blue" || color === "green"),
        true
    );
    return result;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const copy = [...addends];
    copy.length < 1 ? copy.splice(0, 0, 0) : copy;
    const sum = copy.reduce((total: number, num: number) => (total += num), 0);
    const operation = copy.join("+");
    return sum + "=" + operation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negative = values.some((value: number): boolean => value < 0);
    let index = values.findIndex((value: number): boolean =>
        negative ? value < 0 : values.indexOf(value) === values.length - 1
    );
    // eslint-disable-next-line no-extra-parens
    negative ? index : (index += 1);
    const sum = values.reduce(
        (total: number, value: number): number =>
            values.indexOf(value) < index ? (total += value) : total,
        0
    );
    // eslint-disable-next-line no-extra-parens
    negative ? (index += 1) : index;
    const final = [...values];
    final.splice(index, 0, sum);
    return final;
}
