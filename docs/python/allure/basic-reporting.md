# Basic Reporting

You can see all default pytest statuses in the Allure report: only tests that were not succeeded due to one of the assertion errors will be marked as failed, any other exception will cause a test to have a broken status.

```python
import pytest

def test_success():
    """this test succeeds"""
    assert True


def test_failure():
    """this test fails"""
    assert False


def test_skip():
    """this test is skipped"""
    pytest.skip('for a reason!')


def test_broken():
    raise Exception('oops')
```

- All results:

![](/python/allure/basic-reporting.png)

- test_success

![](/python/allure/basic-report-success.png)

- test_failure

![](/python/allure/basic-report-fail.png)

- test_skip

![](/python/allure/basic-report-skip.png)

- test_broken

![](/python/allure/basic-report-broken.png)