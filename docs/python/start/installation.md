# Installation

Get started by installing Playwright。

Install the Pytest plugin:

```bash
pip install pytest-playwright
```

Install the required browsers:

```bash
playwright install
```

## Pytest config

Playwright provides a Pytest plugin to write end-to-end tests. So you can use the [pytest.ini](https://docs.pytest.org/en/stable/reference/reference.html#ini-options-ref) file:

```ini
[pytest]

addopts = -s

cache_dir = .pytest_cache

python_files = *_test.py

python_classes = *Test

python_functions = test_*

testpaths = ./testcase

```

## Add Example Test

Create a `test_my_application.py` file inside the `testcase` directory with the code below:

```python
import re
from playwright.sync_api import Page, expect


def test_homepage_has_Playwright_in_title_and_get_started_link_linking_to_the_intro_page(page: Page):
    page.goto("https://playwright.dev/")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile("Playwright"))

    # create a locator
    get_started = page.get_by_role("link", name="Get started")

    # Expect an attribute "to be strictly equal" to the value.
    expect(get_started).to_have_attribute("href", "/docs/intro")

    # Click the get started link.
    get_started.click()

    # Expects the URL to contain intro.
    expect(page).to_have_url(re.compile(".*intro"))
```

## Running the Example Test

By default tests will be run on chromium. This can be configured via the CLI options. Tests are run in headless mode meaning no browser UI will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

```bash
pytest
```