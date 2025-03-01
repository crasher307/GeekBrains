package lesson1.work;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void setAge(int age) throws Exception {
        if (!(age > 0 && age < 30)) throw new Exception("Введен некорректный возраст");
        this.age = age;
    }

    public void info() {
        System.out.println("Имя: " + this.name);
        System.out.println("Возраст: " + this.age);
    }

    public void voice() {
        System.out.println("Звук!");
    }

    public void jump() {
        System.out.println("Прыжок!");
    }
}
