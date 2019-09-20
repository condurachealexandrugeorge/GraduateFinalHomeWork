Feature:


  @regression
  Scenario Outline: I make a call to create OWNER_ADMIN
    Given I have access to the petclinicSecured as an admin with credentials "admin","admin"
    When I make a call to "/api/users" for create OWNER_ADMIN, VET_ADMIN with:  "<adminRoles>"
    Then I get status code 201
    Examples:
    | adminRoles   |
    | OWNER_ADMIN  |
    | VET_ADMIN    |

  @regression
  Scenario: I make a call to verify authentication as an admin
    Given I try to access petclinicSecured
    When I enter the credentials "admin","admin" for authentication
    Then I get status code 200

  @regression
  Scenario Outline: I make a call to verify authentication as an owner_admin
    Given I try to access petclinicSecured as "OWNER_ADMIN"
    When I access the pages: "<pages>"
    Then I get status code 200
    Examples:
      | pages          |
      | /api/owners    |
      | /api/pets      |
      | /api/pettypes  |
      | /api/visits    |


  @regression
  Scenario Outline: I make a call to verify authentication as an vet_admin
    Given I try to access petclinicSecured as "VET_ADMIN"
    When I access the pages: "<pages>"
    Then I get status code 200
    Examples:
      | pages               |
      | /api/specialties    |
      | /api/pets           |
      | /api/pettypes       |
      | /api/vets           |

  @regression
  Scenario: I make a call to verify post in database
    Given I try to access database for petclinicSecured and get all users
    When I check the database if the admin has been added
    Then The user must exist in the database
