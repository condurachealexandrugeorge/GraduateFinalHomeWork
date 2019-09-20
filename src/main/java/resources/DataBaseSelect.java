package resources;

import java.sql.*;
import java.util.ArrayList;


public class DataBaseSelect {
    Connection con;
    ArrayList<String> username;
    public ArrayList<String> dbSelect(String dbUri, String dbUser, String dbPass, String dbQuery){
        try{
            con= DriverManager.getConnection(dbUri,dbUser,dbPass);
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery(dbQuery);
            username = new ArrayList<>();
            while(rs.next()) {
                username.add(rs.getString("username") + " " + rs.getString("password"));
            }
        }catch(Exception e){
            System.out.println(e);
            return null;
        }
        finally {
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return username;
    }
}
