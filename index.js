/*
 * File: index.js | Note: Integrated main entry point for the Snowflake Project
 */

/*
 * MIT License
 * 
 * Copyright (c) 2022 Shaid Khan
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const package_json = require('./package.json')
const core = require('@actions/core')

function getPackageProperty(arg) {
    console.log(`Snowflake Action - Obtaining the following Property: ${arg}`);
    if (typeof arg !== 'string')
        throw new TypeError(`Parameter ${arg} must be a property type of string`);

    if (package_json[arg] === undefined)
        throw new TypeError(`Property ${arg} is not within File: 'package.json'`);

    return package_json[arg];
}

async function run() {
    try {
        const package_json_property = core.getInput('required_property');
        core.setOutput(`property_${package_json_property}`, getPackageProperty(package_json_property));
    }
    catch (err) {
        core.setFailed(err.message);
    }
}

module.exports = {
    getPackageProperty: getPackageProperty
};

run()