# Description

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context. List any dependencies that are required for this change.

Fixes # (issue)

# Type of change
Please delete options that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Performance improvement (change that optimizes software performance)
- [ ] Code refactoring (restructuring of the source code without changing external functionality)
- [ ] Usability enhancement (change that improves the user experience)
- [ ] Dependency update (updating libraries or external components)
- [ ] Security fix (change that addresses a security vulnerability)
- [ ] Documentation (addition or update of software documentation)
- [ ] Removal of deprecated features (elimination of unused functionalities or components)
- [ ] Testing (addition or update of automated tests)
- [ ] Others (specify the type of change)

# How Has This Been Tested?
Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration

- [ ] Test A
- [ ] Test B

**Test Configuration**:
* Browser: (e.g., Google Chrome, Mozilla Firefox, Safari)
* Device: (e.g., desktop, laptop, tablet, smartphone)
* Screen Resolution: 
* Package Manager: (e.g., npm, Yarn)
* Docker Containerization: (e.g., Yes/No)

# Checklist:

## Backend Testing Checklist:
- [ ] Test endpoints using Postman:
  - [ ] Verify if endpoints are responding correctly.
  - [ ] Test different HTTP methods (GET, POST, PUT, DELETE, etc.).
  - [ ] Check returned status codes (200, 400, 500, etc.).
  - [ ] Send requests with different parameter sets.
  - [ ] Test authentication and authorization cases if applicable.
  - [ ] Verify the validity and consistency of returned data.
  - [ ] Create a Postman collection with all the necessary requests.
- [ ] Verify if the application functions correctly with Docker Compose.
- [ ] Verify if the application functions correctly without Docker Compose in the local environment.

## Frontend Testing Checklist:
- [ ] Responsiveness:
  - [ ] Test on different devices (desktop, laptop, tablet, smartphone).
  - [ ] Verify appearance and layout on different screen sizes.
  - [ ] Test functionality in both landscape and portrait mode on mobile devices.
- [ ] Browsers:
  - [ ] Test on popular browsers (Google Chrome, Mozilla Firefox, Safari).
  - [ ] Check compatibility and consistent behavior across different browsers.

## Automated Testing:
- [ ] Test Coverage: Evaluate the coverage of automated tests.
- [ ] Unit Tests: Execute unit tests to verify specific functionality.
- [ ] Integration Tests: Perform integration tests to check component interactions.