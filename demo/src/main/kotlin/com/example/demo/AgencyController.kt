package com.example.demo

import org.springframework.web.bind.annotation.*

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/agency")
class AgencyController(private val repository: MAgencyRepository) {

    @GetMapping("/")
    fun findAll() = repository.findAll()

    @GetMapping("/{name}")
    fun findOne(@PathVariable name: String) =
            repository.findByName(name)

    @PostMapping("/createAgency")
    fun createAgency(@RequestBody agency: MAgency): String {
        repository.save(agency)
        return String.format("{\"message\": \"%s added successfully!\"}", agency.name)
    }

    @PutMapping("/updateAgency/{name}")
    fun updateAgency(@PathVariable name: String, @RequestBody agency: MAgency): String {
        val oldAgency: MAgency? = repository.findByName(name)
        if (oldAgency == null) {
            return String.format("{\"message\": \"%s not found!\"}", name)
        } else {
            repository.delete(oldAgency)
            repository.save(agency)
            return String.format("{\"message\": \"%s successfully updated!\"}", agency.name)
        }
    }

    @DeleteMapping("/deleteAgency/{name}")
    fun deleteAgency(@PathVariable name: String): String {
        val agencyTobeDeleted = repository.findByName(name)
        agencyTobeDeleted?.let { repository.delete(it) }
        return String.format("{\"message\": \"%s deleted successfully\"}", agencyTobeDeleted?.name)
    }
}
