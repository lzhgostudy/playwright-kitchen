# Writing Tests

Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met. Playwright comes with auto-wait built in meaning it waits for elements to be actionable prior to performing actions. Playwright provides an expect function to write assertions.

## Create your first test

create a new file called `test_func.py`, containing a function with this code:

```python
from playwright.sync_api import Page, expect
import re


def test_func(page: Page):
    page.goto('https://lzhgostudy.github.io/playwright-kitchen/')

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile('Kitchen'))

    # create a locator
    get_started = page.get_by_role("link", name="Get Started")

    # Click the get started link.
    get_started.click()
```

## Group multiple tests in a class

Once you develop multiple tests, you may want to group them into a class.

```python
from playwright.sync_api import Page, expect
import re


class SampleTest:

    @staticmethod
    def test_one(page: Page):
        page.goto('https://lzhgostudy.github.io/playwright-kitchen/')

        # Expect a title "to contain" a substring.
        expect(page).to_have_title(re.compile('Kitchen'))

    @staticmethod
    def test_two(page: Page):
        page.goto('https://lzhgostudy.github.io/playwright-kitchen/')

        # create a locator
        get_started = page.get_by_role("link", name="Get Started")

        # Click the get started link.
        get_started.click()

```


## pytest-ordering: run your tests in order

[pytest-ordering](https://pytest-ordering.readthedocs.io/en/develop/) is a pytest plugin to run your tests in any order that you specify. It provides custom markers that say when your tests should run in relation to each other. 

- Install plugin with: 

```bash
pip install pytest-ordering
```

With pytest-ordering, you can change the default ordering as follows:

```python{5,10}
import pytest
from playwright.sync_api import Page, expect


@pytest.mark.run(order=2)
def test_one(page: Page):
    pass


@pytest.mark.run(order=1)
def test_two(page: Page):
    pass
```

## Skipping test functions

With `@pytest.mark.skip`:

```python{19}
from playwright.sync_api import Page, expect
import re
import pytest


def test_func(page: Page):
    page.goto('https://lzhgostudy.github.io/playwright-kitchen/')

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile('Kitchen'))

    # create a locator
    get_started = page.get_by_role("link", name="Get Started")

    # Click the get started link.
    get_started.click()


@pytest.mark.skip
def test_two(page: Page):
    pass


```

::: tip
Reference: [pytest.mark.skip](https://docs.pytest.org/en/stable/reference/reference.html#pytest-mark-skip-ref)
:::


## Configure base-url

Start Pytest with the base-url argument. The `pytest-base-url` plugin is used for that which allows you to set the base url from the config, CLI arg or as a fixture.

```bash
pytest --base-url http://localhost:8080
```

```python
# test_my_application.py
def test_visit_example(page):
    page.goto("/admin")
    # -> Will result in http://localhost:8080/admin
```