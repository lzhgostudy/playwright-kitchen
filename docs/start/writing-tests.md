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