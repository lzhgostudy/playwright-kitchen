# Get Started

To generate your first report you will need to go through just a few simple steps:

1. [Installing a commandline](https://docs.qameta.io/allure-report/#_get_started)
2. [install: allure-pytest](https://docs.qameta.io/allure-report/#_python)
3. Generate JSON Data: To enable Allure listener to collect results during the test execution simply add `--alluredir` option and provide path to the folder where results should be stored. E.g.:

```bash
pytest --alluredir=./tmp/my_allure_results
```
- **OR** `pytest.ini` config:

```ini
[pytest]

addopts = -sv --alluredir ./tmp/my_allure_results --clean-alluredir
```

4. Generate report from the results.

```bash
allure serve ./tmp/my_allure_results
```

- **OR** generate local HTML files to `report` dir:

```bash
allure generate ./tmp/my_allure_results -o ./report --clean
```