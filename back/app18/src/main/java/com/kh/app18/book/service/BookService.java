package com.kh.app18.book.service;

import com.kh.app18.book.dto.request.BookRequestDto;
import com.kh.app18.book.dto.response.BookResponseDto;
import com.kh.app18.book.entity.BookEntity;
import com.kh.app18.book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class BookService {

    private final BookRepository bookRepository;

    @Transactional
    public BookResponseDto save(BookRequestDto requestDto) {
        BookEntity entity = requestDto.toEntity();
        bookRepository.save(entity);
        return BookResponseDto.from(entity);
    }

    public List<BookResponseDto> findAll() {
        return bookRepository.findAll()
                .stream().map(BookResponseDto::from)
                .toList();
    }

    public BookResponseDto findById(Long id) {
        return BookResponseDto.from(bookRepository.findById(id));
    }

    @Transactional
    public void deleteById(Long id) {
        BookEntity entity = bookRepository.findById(id);
        entity.delete();
    }

    @Transactional
    public BookResponseDto updateTitleAndPriceById(Long id, BookRequestDto requestDto) {
        BookEntity entity = bookRepository.findById(id);
        entity.change(requestDto.getTitle(),requestDto.getPrice());
        return BookResponseDto.from(entity);
    }
}
