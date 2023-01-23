# Running Tests

You can run a single test, a set of tests or all tests. Tests can be run on one browser or multiple browsers. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. If you prefer you can run your tests in headed mode by using the `--headed` flag.

## Running tests on Chromium
  
```bash
pytest
```

## Running a single test file

```bash
pytest test_login.py
```

## Running tests in headed mode _(with browser)_

```bash
pytest --headed test_login.py
```

## Running Tests on specific browsers

```bash
pytest test_login.py --browser webkit
```

## Running Tests on multiple browsers

```bash
pytest test_login.py --browser webkit --browser firefox
```

## Run a set of test files

```bash
pytest testcase/test_one.py testcase/test_two.py
```

## Run tests by node ids

Each collected test is assigned a unique nodeid which consist of the module filename followed by specifiers like class names, function names and parameters from parametrization, separated by `::` characters.

```python
# testcase/test_func.py

from playwright.sync_api import Page, expect
import re


def test_one(page: Page):
    page.goto('https://lzhgostudy.github.io/playwright-kitchen/')

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile('Kitchen'))

    # create a locator
    get_started = page.get_by_role("link", name="Get Started")

    # Click the get started link.
    get_started.click()

def test_two(page: Page):
    assert len((1, 2)) == 2

```

- To run a specific test func within a file:

```bash
pytest test_func.py::test_one
```

---

```python
# testcase/SampleTest.py

from playwright.sync_api import Page, expect
import re


class ClassTest:

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

- To run a specific test func within a class:

```bash
pytest SampleTest.py::ClassTest::test_one
```

## Parallelism: Running Multiple Tests at Once

If your tests are running on a machine with a lot of CPUs, you can speed up the overall execution time of your test suite by using [pytest-xdist](https://pypi.org/project/pytest-xdist/) to run multiple tests at once:

```bash
# install dependency
pip install pytest-xdist
# use the --numprocesses flag
pytest --numprocesses auto
```

Depending on the hardware and nature of your tests, you can set `numprocesses` to be anywhere from `2` to the number of CPUs on the machine. If set too high, you may notice unexpected behavior.

## Running Tests for Debugging

```bash
# Mac OS
PWDEBUG=1 pytest -s

# Window
$env:PWDEBUG=1
pytest -s
```

![Debugging](https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png)