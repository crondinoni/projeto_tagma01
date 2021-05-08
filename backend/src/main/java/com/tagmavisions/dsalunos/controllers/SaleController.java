package com.tagmavisions.dsalunos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tagmavisions.dsalunos.dto.SaleDTO;
import com.tagmavisions.dsalunos.dto.SalesSuccessDTO;
import com.tagmavisions.dsalunos.dto.SalesSumDTO;
import com.tagmavisions.dsalunos.service.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		Page<SaleDTO> list = service.findAll(pageable);
		return ResponseEntity.ok(list);
	}
		
	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SalesSumDTO>> amountGroupedBySeller() {
		List<SalesSumDTO> list = service.amountGroupedBySeller();
		return ResponseEntity.ok(list);	
	}
	
	@GetMapping(value = "/sucess-by-seller")
	public ResponseEntity<List<SalesSuccessDTO>> successGroupedBySeller() {
		List<SalesSuccessDTO> list = service.successGroupedBySeller();
		return ResponseEntity.ok(list);	
	}
}
