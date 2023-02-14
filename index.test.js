/*
 * File: index.test.js | Note: Maintain testing of the component within the Snowflake Action
 */

/* 
 * MIT License
 * 
 * Copyright (c) 2022 Shaid Khan
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var function_obj = require('./index.js')

describe('Note: Integrating test suite to unit test the Snowflake Github Action', () => {
    test('Note: testing to successfully obtain the Property "version" within the Extension Manifest', () => {
        expect(function_obj.getPackageProperty('version', './')).toMatch(/^(\d+).(\d+).(\d+)$/)
    });
    
    test('Note: testing functionality of incorrect type of Input Paramater has been provided', () => {
        expect(() => function_obj.getPackageProperty(1, './')).toThrow(TypeError)
    });
    
    test('Note: testing functionality of missing Property within the File "package.json"', () => {
        expect(() => function_obj.getPackageProperty("missing_arg", './')).toThrow(TypeError)
    });
    
    test('Note: testing functionality of empty string of Input Parameter has been provided', () => {
        expect(() => function_obj.getPackageProperty("", './')).toThrow(TypeError)
    });
})