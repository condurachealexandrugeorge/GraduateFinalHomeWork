package resources;

import com.github.javafaker.Faker;
import org.json.JSONArray;
import org.json.JSONObject;

public class CreateAdminType {
    Faker faker = new Faker();
    private Boolean enabled = true;
    private String password = faker.name().firstName();
    private String username = faker.name().username();
    private int id = faker.idNumber().hashCode();


    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


//    public JSONObject createAdmin(){
//        JSONObject item = new JSONObject();
//        JSONObject rolesElement = new JSONObject();
//        JSONArray rolesArray = new JSONArray();
//        item.put("enabled", getEnabled());
//        item.put("password", getPassword());
//        rolesElement.put("id",getId());
//        rolesElement.put("name",getName());
//        rolesArray.put(rolesElement);
//        item.put("roles",rolesArray);
//        item.put("username", getUsername());
//        return item;
//    }
    public JSONObject createAdminTest(String adminRoles){
        JSONObject item = new JSONObject();
        JSONObject rolesElement = new JSONObject();
        JSONArray rolesArray = new JSONArray();
        item.put("enabled",getEnabled());
        item.put("password",getPassword());
        rolesElement.put("id",getId());
        rolesElement.put("name",adminRoles);
        rolesArray.put(rolesElement);
        item.put("roles",rolesArray);
        item.put("username",getUsername());
        return item;
    }
}
