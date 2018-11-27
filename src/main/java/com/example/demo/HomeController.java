package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController{

    @RequestMapping("/")
    @ResponseBody
    public String index(){
        return "Hello Spring";
    }

    @GetMapping("/{name}.html")
    public String page(@PathVariable String name, Model model){
        model.addAttribute("pageName", name);
        return "page";
    }

}