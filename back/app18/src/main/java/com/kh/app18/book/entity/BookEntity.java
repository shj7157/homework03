package com.kh.app18.book.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Getter
@Table(name = "BOOK")
@Builder
public class BookEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "book_seq_gen")
    @SequenceGenerator(name = "book_seq_gen" , sequenceName = "SEQ_BOOK", allocationSize = 1 )
    private Long id;

    @Column(length = 80, nullable = false)
    private String title;

    @Column(nullable = false)
    private Integer price;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt;

    @Column(length = 1, nullable = false)
    @Builder.Default
    private String delYn="N";

    public void delete(){
        delYn = "Y";
        modifiedAt = LocalDateTime.now();
    }

    public void change(String title, Integer price){
        this.title = title;
        this.price = price;

        modifiedAt = LocalDateTime.now();
    }

}
