package com.java.chess.Controller;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.fasterxml.jackson.databind.introspect.TypeResolutionContext.Basic;
import com.java.chess.Service.AuthenticationService;
import com.java.chess.dto.Request.ForgotPasswordRequest;
import com.java.chess.dto.Request.LoginRequest;
import com.java.chess.dto.Request.RegisterRequest;
import com.java.chess.dto.Response.BasicResponse;
import com.java.chess.dto.Response.LoginResponse;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ezpay/api/v1/authentication")
@Tag(name="Authentication", description = "It is used to authenticate and authorize the user")
public class AuthenticationController {
    
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register( @RequestBody RegisterRequest registerRequest){
        BasicResponse<String> response = new BasicResponse<>();
        try{
            response = authenticationService.register(registerRequest);
            return new ResponseEntity<>(response , HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessege("Something went wrong!");
            response.setData("");
            return new ResponseEntity<>(response , HttpStatus.EXPECTATION_FAILED);
        }

    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        BasicResponse <LoginResponse> response = new BasicResponse<>();
        try {
            response = authenticationService.login(loginRequest);
             return new ResponseEntity<>(response , HttpStatus.OK);
            
        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.setMessege("Something went wrong!");
            response.setData(LoginResponse.builder().accessToken("").build());
            return new ResponseEntity<>(response , HttpStatus.EXPECTATION_FAILED);
        }
    }


    @PatchExchange("/forgot-password")

    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest){
        BasicResponse <String> response = new BasicResponse<>();

        try {
        
            
            response = authenticationService.forgotPassword(forgotPasswordRequest);
            return new ResponseEntity<>(response , HttpStatus.OK);
        } catch (Exception e) {
            response.setMessege("Something wen wrong");
            response.setData("");
            return new ResponseEntity<>(response , HttpStatus.EXPECTATION_FAILED);
        }
    }

}
