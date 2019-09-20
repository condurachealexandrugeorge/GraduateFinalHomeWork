package resources;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReadConfigFile {

    public Properties readConfig(){

        try (
                InputStream input = getClass().getClassLoader().getResourceAsStream("config.properties")) {
            Properties prop = new Properties();
            if (input == null) {
                System.out.println("Sorry, unable to find config.properties");
                return null;
            }
            prop.load(input);
            return prop;
        } catch (
                IOException ex) {
            ex.printStackTrace();
            return null;
        }
    }
}
