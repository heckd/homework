package com.example.demo

import org.springframework.data.mongodb.repository.MongoRepository

interface MAgencyRepository : MongoRepository<MAgency, String> {
    fun findByName(name: String): MAgency?
}