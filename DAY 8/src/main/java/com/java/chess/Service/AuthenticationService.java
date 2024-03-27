package com.java.chess.Service;

import com.java.chess.dto.Request.ForgotPasswordRequest;
import com.java.chess.dto.Request.LoginRequest;
import com.java.chess.dto.Request.RegisterRequest;
import com.java.chess.dto.Response.BasicResponse;
import com.java.chess.dto.Response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
    
}
