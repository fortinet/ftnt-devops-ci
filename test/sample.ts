type Shape = { kind: 'circle'; radius: number } | { kind: 'square'; sideLength: number };

function area(shape: Shape): number {
    // Extract out the 'kind' field first.
    const { kind } = shape;

    if (kind === 'circle') {
        // We know we have a circle here!
        return Math.PI * shape.radius ** 2;
    } else {
        // We know we're left with a square here!
        return shape.sideLength ** 2;
    }
}

function foo(arg: unknown) {
    const argIsString = typeof arg === 'string';
    if (argIsString) {
        //              ~~~~~~~~~~~
        // Error! Property 'toUpperCase' does not exist on type 'unknown'.
    }
}

function f(x: string | number | boolean) {
    const isString = typeof x === 'string';
    const isNumber = typeof x === 'number';
    const isStringOrNumber = isString || isNumber;
    if (isStringOrNumber) {
        return x; // Type of 'x' is 'string | number'.
    } else {
        return x; // Type of 'x' is 'boolean'.
    }
}

interface Options {
    width?: number;
    height?: number;
}

const a: Options = {
    width: 100,
    height: 100
    // 'data-blah': true, // Error! 'data-blah' wasn't declared in 'Options'.
};

interface OptionsWithDataProps extends Options {
    // Permit any property starting with 'data-'.
    [optName: `data-${string}`]: unknown;
}

const b: OptionsWithDataProps = {
    width: 100,
    height: 100,
    'data-blah': true // Works!

    // 'unknown-property': true,  // Error! 'unknown-property' wasn't declared in 'OptionsWithDataProps'.
};

const iHaveCorrectCase = {
    iAmCamelCase: true,
    i_am_camel_case: false,
    I_AM_UPPER_CASE: true
};

interface InterfacePascalCase {
    valid: boolean;
}

class ClassPascalCase implements InterfacePascalCase {
    valid = true;
}

// prevent 'unused variable' errors
console.log(area, foo, f, a, b, iHaveCorrectCase, new ClassPascalCase());
