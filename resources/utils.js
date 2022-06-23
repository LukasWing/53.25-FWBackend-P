/**
 * Compares inputs using equality (==) and (===). Throws a warning if not ===
 * @param expected value
 * @param actual value
 * @param verbose if true a passed test will make a log note
 * @param active if false, this test is NOT executed
 */
export function testEquals(expected, actual, verbose = false, active = true) {
    if (!active)
        return;
    if (expected === actual) {
        if (verbose)
            console.trace("Value '" + expected + "' passed test :)");
    }
    else if (expected == actual) {
        console.warn("Test passed equality, but not strict equality. " +
            "\n Expected " +
            expected +
            " of type " +
            typeof expected +
            "\n got " +
            actual +
            " of type " +
            typeof actual);
    }
    else {
        console.error("Test failed." +
            "\n Expected " +
            expected +
            " of type " +
            typeof expected +
            "\n got " +
            actual +
            " of type " +
            typeof actual);
    }
}
