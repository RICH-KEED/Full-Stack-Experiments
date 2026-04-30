package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.lang.Thread.State;
import java.sql.*;



@RestController
public class Controller {

    @GetMapping("/health")
    public String health() {
        return "Server is up and running!";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }

    @PostMapping("/query")
    public String fromQuery(@RequestParam String name, @RequestParam int age) {
        Statement stmt = null;
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
            stmt = conn.createStatement();
            stmt.executeUpdate("INSERT INTO users (name, age) VALUES ('" + name + "', " + age + ")");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return "Data inserted successfully!";
    }

}
