const RegexUtil = {
    string: new RegExp('^[a-zA-Z]+$'),
    number: new RegExp('^[1-9][0-9]*$'),
    name: new RegExp('^[a-zA-Z]+$'),
    email: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    // alphaNumeric: new RegExp('^[a-zA-Z0-9]+$')
}

type RegexUtilType = keyof typeof RegexUtil;

export function RegexValidator(key: RegexUtilType, data: unknown) {
    const valueToTest = `${data}`;
    return RegexUtil[key].test(valueToTest);
}
