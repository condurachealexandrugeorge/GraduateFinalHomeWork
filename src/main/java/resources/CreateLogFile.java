package resources;

import java.io.IOException;
import java.util.logging.*;

public class CreateLogFile{
    Logger logger = Logger.getLogger("MyLog");

    public Logger createLog(){
        FileHandler fh;
        try {
            // This block configure the logger with handler and formatter
            fh = new FileHandler("C:\\Users\\alcondurache\\documentation\\finalHomeWork\\log\\test.log");
            logger.addHandler(fh);
            SimpleFormatter formatter = new SimpleFormatter();
            fh.setFormatter(formatter);


        } catch (SecurityException e) {
            e.printStackTrace();
        } catch (
                IOException e) {
            e.printStackTrace();
        }
        return logger;
    }


}
