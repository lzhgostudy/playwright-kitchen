# Pytest fixtures

`Pytest-playwright` configures Playwright-specific fixtures for pytest. To use these fixtures, use the fixture name as an argument to the test function.

At a basic level, test functions request fixtures they require by declaring them as arguments.

```python
def test_my_app_is_working(fixture_name):
    # Test using fixture_name
    # ...
```

## Quick example

**Function scope:** These fixtures are created when requested in a test function and destroyed when the test ends.

- `context`: New [browser context](https://playwright.dev/python/docs/browser-contexts) for a test.
- `page`: New [browser page](https://playwright.dev/python/docs/pages) for a test.

```python
# MicroSoft Bing Search Tests

import pytest
from playwright.sync_api import BrowserContext, Page, expect
import re


@pytest.fixture(scope='function')
def before(context: BrowserContext, page: Page):
    page.goto('https://www.bing.com')


def test_search_playwright(before, page: Page):
    keyword = r'playwright'
    input_el = page.locator('#sb_form_q')
    input_el.fill('playwright')
    input_el.press('Enter')
    expect(page.locator('ol#b_results')).to_have_text(re.compile(keyword))


def test_search_pytest(before, page: Page):
    keyword = r'pytest'
    input_el = page.locator('#sb_form_q')
    input_el.fill('pytest')
    input_el.press('Enter')
    expect(page.locator('ol#b_results')).to_have_text(re.compile(keyword))

```

In this example, `test_search_playwright` requests `before` (`def test_search_playwright(before, page: Page):`), and when pytest sees  this, it will execute the `before` fixture function.

Here's roughly what's happening if we were to do it by hand:

```python{5}
def before(context: BrowserContext, page: Page):
  page.goto('https://www.bing.com')

def test_search_playwright(page: Page):
  before(page) # Fixture func

  keyword = r'playwright'
  input_el = page.locator('#sb_form_q')
  input_el.fill('playwright')
  input_el.press('Enter')
  expect(page.locator('ol#b_results')).to_have_text(re.compile(keyword))

```

- Group multiple tests in a class

```python
import pytest
from playwright.sync_api import Page, expect
import re


@pytest.fixture
def before(context: BrowserContext, page: Page):
    page.goto('https://www.bing.com')


class BingSearchTest:

    @staticmethod
    def test_search_playwright(page: Page, before):
        keyword = r'playwright'
        input_el = page.locator('#sb_form_q')
        input_el.fill('playwright')
        input_el.press('Enter')
        expect(page.locator('ol#b_results')).to_have_text(re.compile(keyword))

    @staticmethod
    def test_search_pytest(page: Page, before):
        keyword = r'pytest'
        input_el = page.locator('#sb_form_q')
        input_el.fill('pytest')
        input_el.press('Enter')
        expect(page.locator('ol#b_results')).to_have_text(re.compile(keyword))
```

## Automate logging in

**Session scope:** These fixtures are created when requested in a test function and destroyed when all tests end.

- `playwright`: [Playwright](https://playwright.dev/python/docs/api/class-playwright) instance.
- `browser_type`: [BrowserType](https://playwright.dev/python/docs/api/class-browsertype) instance of the current browser.
- `browser`: [Browser](https://playwright.dev/python/docs/api/class-browser) instance launched by Playwright.
- `browser_name`: Browser name as string.
- `browser_channel`: Browser channel as string.
- `is_chromium`, `is_webkit`, `is_firefox`: Booleans for the respective browser types.

The following example automates logging into GitHub. Once these steps are executed, the browser context will be authenticated.

```python
from playwright.sync_api import Browser, Page, expect
import pytest
import re


@pytest.fixture(scope='session')
def github_login(browser: Browser):
    context = browser.new_context()
    page = context.new_page()
    page.goto('https://github.com/login')
    # Interact with login form
    page.get_by_text("Login").click()
    page.get_by_label("User Name").fill(USERNAME)
    page.get_by_label("Password").fill(PASSWORD)
    page.get_by_text('Submit').click()

    yield context


def test_one(github_login):
    # Continue with the test
    context = github_login
    page = context.new_page()
    page.goto('...')


def test_two(github_login):
    # Continue with the test
    context = github_login
    page = context.new_page()
    page.goto('...')
```



## Yield fixtures

“Yield” fixtures `yield` instead of `return`. With these fixtures, we can run some code and pass an object back to the requesting fixture/test, just like with the other fixtures. 

::: info The only differences are:
1. `return` is swapped out for `yield`.
2. Any teardown code for that fixture is placed after the `yield`.
:::


- Here’s what that might look like:

```python
# content of test_emaillib.py
from emaillib import Email, MailAdminClient

import pytest


@pytest.fixture
def mail_admin():
    return MailAdminClient()


@pytest.fixture
def sending_user(mail_admin):
    user = mail_admin.create_user()
    yield user
    mail_admin.delete_user(user)


@pytest.fixture
def receiving_user(mail_admin):
    user = mail_admin.create_user()
    yield user
    user.clear_mailbox()
    mail_admin.delete_user(user)


def test_email_received(sending_user, receiving_user):
    email = Email(subject="Hey!", body="How's it going?")
    sending_user.send_email(email, receiving_user)
    assert email in receiving_user.inbox
```

**Reference:** [yield fixtures](https://docs.pytest.org/en/stable/how-to/fixtures.html#yield-fixtures-recommended)


## Defining fixtures in the root `conftest.py`

Creating `conftest.py` file at the project root and use it to define the fixtures that you inject into among all tests

Put the fixtures function into a separate `conftest.py`:

```python
import pytest
from playwright.sync_api import Page


@pytest.fixture
def open_browser(page: Page):
    page.goto('https://www.bing.com')
```

Content of test file:

```python
from playwright.sync_api import Page, expect
import re


def test_search_playwright(open_browser, page: Page):
    keyword = r'playwright'
    input_el = page.locator('#sb_form_q')
    input_el.fill('playwright')
    input_el.press('Enter')
    expect(page.locator('ol#b_results')).to_have_text(re.compile(keyword))

```