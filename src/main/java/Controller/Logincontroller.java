package Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@SuppressWarnings("unused")
@Controller
public class Logincontroller {

    
    @GetMapping
    public String Login(){
        return "login";
    }

}
