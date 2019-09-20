package stepsDef;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;
import resources.CreateAdminType;
import resources.CreateLogFile;
import resources.DataBaseSelect;
import resources.ReadConfigFile;

import java.util.ArrayList;


public class CreateAdminSteps {
    RequestSpecification request;
    Response response;
    CreateAdminType createAdminType;
    CreateLogFile logFile;
    ReadConfigFile configFile;
    DataBaseSelect dataBaseSelect;
    ArrayList<String> allUsers;
    Boolean userExist = false;


    @Before
    public void before(){
        logFile = new CreateLogFile();
        configFile = new ReadConfigFile();
        dataBaseSelect = new DataBaseSelect();
        RestAssured.baseURI = configFile.readConfig().getProperty("baseURI");


    }

    @Given("^I have access to the petclinicSecured as an admin with credentials \"([^\"]*)\",\"([^\"]*)\"$")
    public void iHaveAccessToThePetclinicSecuredAsAnAdminWithCredentials(String username, String password) {
        logFile.createLog().info("I make a call to create OWNER_ADMIN");
        logFile.createLog().info("I have access to the petclinicSecured as an admin");
        request = RestAssured.given()
        .auth().basic(username,password);
    }

    @Given("^I try to access petclinicSecured$")
    public void iTryToAccessPetclinicSecured() {
        logFile.createLog().info("I make a call to verify authentication as an admin");
        request = RestAssured.given();
    }

    @When("^I enter the credentials \"([^\"]*)\",\"([^\"]*)\" for authentication$")
    public void iEnterTheCredentialsForAuthentication(String username, String password){
        logFile.createLog().info("I enter the credentials \"admin\",\"admin\" for authentication");
        response =request.auth().basic(username,password)
                .get();
    }

    @When("^I make a call to \"([^\"]*)\" for create OWNER_ADMIN, VET_ADMIN with:  \"([^\"]*)\"$")
    public void iMakeACallToForCreateOWNER_ADMINVET_ADMINWith(String endpoint, String adminRoles) {
        logFile.createLog().info("I make a call to \"/api/users\" for create "+adminRoles);
    createAdminType = new CreateAdminType();
        response = request.contentType(ContentType.JSON)
                .body(createAdminType.createAdminTest(adminRoles).toString())
                .post(endpoint);
    }
    @Then("^I get status code (\\d+)$")
    public void iGetStatusCode(int statusCode) {
        logFile.createLog().info("I get status code " +statusCode);
        response.then().statusCode(statusCode);
    }


    @Given("^I try to access petclinicSecured as \"([^\"]*)\"$")
    public void iTryToAccessPetclinicSecuredAs(String adminRoles){
        logFile.createLog().info("I make a call to verify authentication as an "+adminRoles);
        request = RestAssured.given()
                .auth().basic("admin","admin");
        createAdminType = new CreateAdminType();
        response = request.contentType(ContentType.JSON)
                .body(createAdminType.createAdminTest(adminRoles).toString())
                .post("/api/users");
    }

    @When("^I access the pages: \"([^\"]*)\"$")
    public void iAccessThePages(String pages) {
        logFile.createLog().info("I access the pages:"+pages);
        String user = response.then().extract().jsonPath().get("username").toString();
        String pass = response.then().extract().jsonPath().get("password").toString();
        request = RestAssured.given()
                .auth().basic(user,pass);
        response = request.when()
                .get(pages);
    }


    @Given("^I try to access database for petclinicSecured and get all users$")
    public void iTryToAccessDatabaseForPetclinicSecuredAndGetAllUsers() {
        logFile.createLog().info("I try to access database for petclinicSecured and get all users");

        request = RestAssured.given()
                .auth().basic("admin","admin");
        createAdminType = new CreateAdminType();
        response = request.contentType(ContentType.JSON)
                .body(createAdminType.createAdminTest("OWNER_ADMIN").toString())
                .post("/api/users");
        allUsers = new ArrayList<>();
        allUsers =dataBaseSelect.dbSelect(configFile.readConfig().getProperty("dbURI"),configFile.readConfig().getProperty("dbUser"),configFile.readConfig().getProperty("dbPass"),"select * from users");
    }

    @When("^I check the database if the admin has been added$")
    public void iCheckTheDatabaseIfTheAdminHasBeenAdded() {
        logFile.createLog().info("I check the database if the admin has been added");
        String userName = response.then().extract().jsonPath().get("username").toString();
        for(int i =0;i<allUsers.size();i++){
            if(allUsers.get(i).contains(userName)){
                userExist = true;
            }else {
                userExist =false;
            }
        }
    }

    @Then("^The user must exist in the database$")
    public void theUserMustExistInTheDatabase() {
        logFile.createLog().info("The user must exist in the database");
        Assert.assertTrue(userExist);

    }
}
