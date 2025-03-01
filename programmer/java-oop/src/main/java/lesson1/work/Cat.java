package lesson1.work;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class Cat extends Animal {
    private String color;

    public Cat(String name, int age, String color) {
        super(name, age);
        this.color = color;
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Цвет: " + this.color);
    }

    @Override
    public void voice() {
        System.out.println("Мяу!");
    }

    @Override
    public void jump() {
        System.out.println("ТыГыДык!");
    }
}

/*
@Data - get, set
@NoArgsConstructor
@AllArgsConstructor
class Cat {
    private String name;
    private String color;
    private int age;
}
*/