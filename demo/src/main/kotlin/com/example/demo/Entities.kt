package com.example.demo

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId

@Document(collection = "agencies")
data class MAgency(
        @MongoId var name: String,
        var country: String,
        var countryCode: String,
        var city: String,
        var street: String,
        var settlementCurrency: String,
        var contactPerson: String)
