package com.ebms.ui_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class EbmsUserInterfaceServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EbmsUserInterfaceServiceApplication.class, args);
	}

}
