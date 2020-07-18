package com.admin.backendapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
public class DashboardController {

    @GetMapping(value = "/hello")
    public ResponseEntity<String> helloWorld(
        @RequestHeader(value = "User-Agent") String userAgent) {
        return ResponseEntity.ok().body("Welcome to dashboard");
    }
}
