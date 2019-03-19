package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Ramesh Aravind\\eclipse-TestNG\\cucumber\\src\\test\\resources\\Features\\TelecomProject.feature", 
                   monochrome=true, strict=false, dryRun=false, glue = "cucumber",plugin = "html:target")
public class TestRunner {

}
