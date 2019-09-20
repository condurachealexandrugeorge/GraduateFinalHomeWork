package cucumberRun;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="src/test/java/allScenario/adminSteps.feature",
        glue="stepsDef",
        plugin = {
                "json:Raport/cucumber.json" ,
                "junit:Raport/cucumber.xml",
        },
        monochrome = true,
        tags ={"@regression"}
)
public class TestRunner extends AbstractTestNGCucumberTests {

}
