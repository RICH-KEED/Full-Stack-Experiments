package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.StudentModel;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository repository;


    public StudentModel postStudent(StudentModel model) {
        return repository.save(model);
    }
    
}
