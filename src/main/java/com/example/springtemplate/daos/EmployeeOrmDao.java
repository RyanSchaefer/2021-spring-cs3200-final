package com.example.springtemplate.daos;

import com.example.springtemplate.models.Driver;
import com.example.springtemplate.models.Employee;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.EmployeeRepository;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EmployeeOrmDao {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    TeamRepository teamRepository;

    @PostMapping("/api/employees")
    public Employee createTeam(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping("/api/employees")
    public List<Employee> findAllEmployees() {
        return (List<Employee>) employeeRepository.findAll();
    }

    @GetMapping("/api/employees/{id}")
    public Employee findEmployeeById(
            @PathVariable("id") Integer id) {
        return employeeRepository.findById(id).get();
    }

    @PutMapping("/api/employees/{id}")
    public Employee updateEmployee(
            @PathVariable("id") Integer id,
            @RequestBody Employee newEmployee) {
        Employee employee = this.findEmployeeById(id);
        employee.setTeam(newEmployee.getTeam());
        employee.setHired(newEmployee.getHired());
        employee.setName(newEmployee.getName());
        employee.setRole(newEmployee.getRole());
        employee.setSalary(newEmployee.getSalary());
        return employeeRepository.save(newEmployee);
    }

    @PutMapping("/api/employees/{empId}/teams/{teamId}")
    public Employee addEmployeeToTeam(
            @PathVariable("empId") Integer empId,
            @PathVariable("teamId") Integer teamId
    ) {
        Employee employee = employeeRepository.findById(empId).get();
        Team team = teamRepository.findById(teamId).get();
        employee.setTeam(team);
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/api/employees/{id}")
    public void deleteEmployee(
            @PathVariable("id") Integer id) {
        employeeRepository.deleteById(id);
    }
}
