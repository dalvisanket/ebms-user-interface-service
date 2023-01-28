package com.ebms.ui_service.mtr_rdng.proxy.controller;

import com.ebms.mtr_rdng.db.domain.model.ConsumerMeterRow;
import com.ebms.mtr_rdng.db.domain.model.ConsumerRow;
import com.ebms.mtr_rdng.db.domain.model.MeterReadingRow;
import com.ebms.mtr_rdng.db.domain.model.MeterRow;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.Year;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/get-all-meter-readings/{meter_id}/{consumer_id}")
    public ResponseEntity<List<MeterReadingRow>> getAllMeterReadings(@PathVariable(name = "meter_id") long meter_id, @PathVariable(name = "consumer_id") long consumer_id);

    @GetMapping("/get-meter-readings-for-year/{meter_id}/{consumer_id}")
    public ResponseEntity<Map<Year,List<MeterReadingRow>>> getMeterReadingForYear(@PathVariable(name = "meter_id") long meter_id, @PathVariable(name = "consumer_id") long consumer_id);

    @GetMapping("/get-consumer-meter-association/consumer-id/{consumer_id}")
    public ResponseEntity<List<ConsumerMeterRow>> getAssociationFromConsumerId(@PathVariable(name = "consumer_id") long consumer_id);

    @GetMapping("/get-consumer-meter-association/meter-id/{meter_id}")
    public ResponseEntity<List<ConsumerMeterRow>> getAssociationFromMeterId( @PathVariable(name = "meter_id") long meter_id);

}
