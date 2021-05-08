package com.tagmavisions.dsalunos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tagmavisions.dsalunos.dto.SalesSuccessDTO;
import com.tagmavisions.dsalunos.dto.SalesSumDTO;
import com.tagmavisions.dsalunos.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query("SELECT new com.tagmavisions.dsalunos.dto.SalesSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SalesSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.tagmavisions.dsalunos.dto.SalesSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SalesSuccessDTO> successGroupedBySeller();
}
