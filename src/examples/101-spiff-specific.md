# Spiff Specific Notes

# GraphQL

Our GraphQL setup lets Types flow from the backend/api to the front-end/components. Rad!

# Local Type Check

If you mess with types, check to see if you broke Types by running: `yarn ts-check`
You can fix the issues before getting to CI.

# Pipeline

CI will run the `yarn ts-check` script to make sure that types are valid across the app.
It will fail if there is a violation.

# Type Checked Files

By default files will be Type checked. We have a list of files that we "opt-out" of type checking.
`scripts/nonTypeCheckedFiles.json`
Please help to clean up the files on this list.
Please try to create cleanly typed files and not add files to this list.

# Stats

Run a script that will return the percentage of the files that are type covered.

1. Run `yarn stats`
2. Select "all" or your specific pod
3. Select "Typesscript"
