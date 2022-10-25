<!-- markdownlint-disable-file MD013 -->
![Snowflake](img/snowflake_backdrop.png)

[![Project Build](https://github.com/ShaidK/Snowflake/actions/workflows/build_snowflake_workflow.yml/badge.svg)](https://github.com/ShaidK/Snowflake/actions/workflows/build_snowflake_workflow.yml)![GitHub release (latest by date)](https://img.shields.io/github/v/release/ShaidK/Snowflake?label=Snowflake%20Version)

**INTEGRATION**

The "Snowflake Action" is a simple [Github Action][1] designed to obtain the
Project properties defined within the Extension Manifest File (_aka "package.json"_).
To integrate the "Snowflake Action" within your [Github Workflow][2] you need
to add the following steps within your [Github Workflow][2] File.

```yaml
- name: Obtained Project Version
  uses: ShaidK/Snowflake@v2.1.0
  with:
      required_property: '<NAME_OF_PROPERTY>'
```

**INPUT**

The "Snowflake Action" requires the input parameter `required_property`.
This defines the property which is needed to be obtained from Extension
Manifest aka "package.json".

**OUTPUT**

The "Snowflake Action" will output the property based upon the name of
the property which was requested aka `property_<NAME_OF_PROPERTY>`.

For example if the property `name` was requested, the output property
will be defined as `property_name`.

**USAGE**

_Note: Example Usage of the Snowflake Action_

```yaml
jobs:
    obtain_package_json_property:
        runs-on: windows-latest
        name: Obtained Package JSON Properties
        steps:
            - uses: actions/checkout@v3
              with:
                  fetch-depth: 0

            - name: Obtained Project Version
              uses: ShaidK/Snowflake@v2.1.0
              with:
                  required_property: 'version'

            - name: Output Project Version
              run: echo 'Project Version - ${{ steps.package_version.outputs.property_version }}
```

[1]: https://docs.github.com/en/actions/quickstart "Github Action"
[2]: https://docs.github.com/en/actions/using-workflows/about-workflows "Github Workflow"
