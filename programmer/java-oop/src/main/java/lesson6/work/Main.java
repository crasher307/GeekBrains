package lesson6.work;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Agrigator agrigator = BookCart.generateBook();
        System.out.println(agrigator);
    }
}

/**
 * Хранение инфы о книге (единств. ответственность)
 */
@Data
@AllArgsConstructor
class Book {
    private int pages;
    private String title;
    private String author;
    private int publishYear;
}

/**
 * Хранение инфы о жанрах книг (открыт для расширения, закрыт для изменения)
 */
interface Genre {
    public String getGenre();
}
@Data
@AllArgsConstructor
class BookGenre implements Genre {
    private String bookGenre;
    @Override
    public String getGenre() {
        return bookGenre;
    }
}

/**
 * (формат чтения, размер), принцип подстановки Б.Лисков
 */
//@EqualsAndHashCode(callSuper = true)
//@Data
class ElectronBook extends Book {
    private String type;
    private int size;
    public ElectronBook(int pages, String title, String author, int publishYear) {
        super(pages, title, author, publishYear);
    }
}

/**
 * производит поиск по авторам книг, принц. разделения интерфейса
 */
interface Searchable {
    public List<Book> searchByTitle(String title);
    public List<Book> searchByAuthor(String author);
}
@NoArgsConstructor
@AllArgsConstructor
class Library implements Searchable {
    private List<Book> booksList;
    public void addBook(Book book) {
        booksList.add(book);
    }
    @Override
    public List<Book> searchByTitle(String title) {
        List<Book> response = new ArrayList<>();
        for (Book book : booksList) {
            if (book.getTitle().contains(title)) response.add(book);
        }
        return response;
    }
    @Override
    public List<Book> searchByAuthor(String author) {
        List<Book> response = new ArrayList<>();
        for (Book book : booksList) {
            if (book.getAuthor().contains(author)) response.add(book);
        }
        return response;
    }
}

/**
 * выводит инфу в различных форматах (без формата, json, html) - заглушки, принцип инверсии зависимостей
 */
interface Formatter {
    public String format(List<ElectronBook> booksList);
}
class NoFormatter implements Formatter {
    @Override
    public String format(List<ElectronBook> booksList) {
        return "NoFormat: " + booksList.toString();
    }
}
class JSONFormatter implements Formatter {
    @Override
    public String format(List<ElectronBook> booksList) {
        return "JSON: " + booksList.toString();
    }
}
class HTMLFormatter implements Formatter {
    @Override
    public String format(List<ElectronBook> booksList) {
        return "HTML: " + booksList.toString();
    }
}


/**
 * Что-то, зачем-то
 */
interface BookCart {
    public static Agrigator generateBook() {
        Agrigator.count++;
        return new Agrigator(
                new Book(94, "Test title", "Test author", 2023),
                new BookGenre("Test genre")
        );
    }
}
@Getter
class Agrigator implements BookCart {
    public static int count = 0;
    private final Book book;
    private final BookGenre genre;
    public Agrigator(Book book, BookGenre genre) {
        count++;
        this.book = book;
        this.genre = genre;
    }
    @Override
    public String toString() {
        return String.format("Agrigator{book = %s, genre = %s}", this.book.toString(), this.genre.toString());
    }
}