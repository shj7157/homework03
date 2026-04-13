package com.kh.app18.book.controller;

import com.kh.app18.book.dto.request.BookRequestDto;
import com.kh.app18.book.dto.response.BookResponseDto;
import com.kh.app18.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book")
@CrossOrigin
@Slf4j
@RequiredArgsConstructor
public class BookApiController {

    private final BookService bookService;

    @PostMapping
    public ResponseEntity<BookResponseDto> save(@RequestBody BookRequestDto requestDto){
        BookResponseDto respDto = bookService.save(requestDto);
        return ResponseEntity.status(200).body(respDto);
    }

    @GetMapping
    public ResponseEntity<List<BookResponseDto>> findAll(){
        List<BookResponseDto> voList = bookService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(voList);
    }

    @GetMapping("{id}")
    public ResponseEntity<BookResponseDto> findById(@PathVariable Long id){
        BookResponseDto bookResponseDto = bookService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(bookResponseDto);
    }

    @PutMapping("{id}")
    public ResponseEntity<BookResponseDto> updateTitleAndPriceById(@PathVariable Long id, @RequestBody BookRequestDto requestDto){
        BookResponseDto bookResponseDto = bookService.updateTitleAndPriceById(id, requestDto);
        return ResponseEntity.status(HttpStatus.OK).body(bookResponseDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id){
        bookService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
