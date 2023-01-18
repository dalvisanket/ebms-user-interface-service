package com.ebms.ui_service.mtr_rdng.proxy.controller;

import com.ebms.mtr_rdng.db.domain.model.ConsumerRow;
import com.ebms.mtr_rdng.db.domain.model.MeterRow;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@FeignClient(name = "METER-READING-ACQUISITION")
public interface MeterReadingProxyController {

    @PostMapping("/new-meter")
    public ResponseEntity<String> addNewMeter();

    @GetMapping("/get-meter/{meter_id}")
    public ResponseEntity<MeterRow> getMeter(@PathVariable(name = "meter_id") long meter_id);

    @GetMapping("/get-all-meters")
    public ResponseEntity<List<MeterRow>> getAllMeter();

    @GetMapping("/get-all-consumers")
    public ResponseEntity<List<ConsumerRow>> getAllConsumers();
}
