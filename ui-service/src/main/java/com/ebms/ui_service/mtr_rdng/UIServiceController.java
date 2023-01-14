package com.ebms.ui_service.mtr_rdng;


import com.ebms.mtr_rdng.db.domain.model.ConsumerRow;
import com.ebms.mtr_rdng.db.domain.model.MeterRow;
import com.ebms.ui_service.mtr_rdng.proxy.controller.MeterReadingProxyController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UIServiceController {

    @Autowired
    private MeterReadingProxyController meterReadingProxyController;

    @PostMapping("/new-meter")
    public ResponseEntity addNewMeter(){
        return meterReadingProxyController.addNewMeter();
    }

    @GetMapping("/get-meter/{meter_id}")
    public ResponseEntity<MeterRow> getMeter(@PathVariable(name = "meter_id") long meter_id){
        return meterReadingProxyController.getMeter(meter_id);
    }

    @GetMapping("/get-all-meters")
    public ResponseEntity<List<MeterRow>> getAllMeter(){
        return meterReadingProxyController.getAllMeter();
    }

    @GetMapping("/get-all-consumers")
    public ResponseEntity<List<ConsumerRow>> getAllConsumers(){
        return meterReadingProxyController.getAllConsumers();
    }

}
