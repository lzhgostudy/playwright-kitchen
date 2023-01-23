# Pytest fixtures

`Pytest-playwright` configures Playwright-specific fixtures for pytest. To use these fixtures, use the fixture name as an argument to the test function.

At a basic level, test functions request fixtures they require by declaring them as arguments.

```python
def test_my_app_is_working(fixture_name):
    # Test using fixture_name
    # ...
```

## Quick example

```python
# MicroSoft Bing Search Tests

import pytest
from playwright.sync_api import Page, expect
import re


@pytest.fixture
def before(page: Page):
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
def before(page: Page):
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
def before(page: Page):
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

## yield fixtures

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