package com.kh.app18.book.dto.response;

import com.kh.app18.book.entity.BookEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@ToString
@Getter
@Builder
public class BookResponseDto {

    private Long id;
    private String title;
    private Integer price;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public static BookResponseDto from(BookEntity entity) {
        return BookResponseDto.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .price(entity.getPrice())
                .createdAt(entity.getCreatedAt())
                .modifiedAt(entity.getModifiedAt())
                .build();
    }
}
