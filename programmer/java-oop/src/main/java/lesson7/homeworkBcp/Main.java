package lesson7.homeworkBcp;

import lib.Console;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Controller controller = new Controller();
        controller.init();
    }
}

interface Calculable {
    // Операции с комплексными числами
    public void addition(ComplexNumber complexNumber1, ComplexNumber complexNumber2); // Сложение
    public void substraction(ComplexNumber complexNumber1, ComplexNumber complexNumber2); // Вычитание
    public void multiplication(ComplexNumber complexNumber1, ComplexNumber complexNumber2); // Умножение
    public void division(ComplexNumber complexNumber1, ComplexNumber complexNumber2); // Деление
}
interface Logable {
    public void print(String message);
}
interface Viewable {
    public String stringComplexNumber(ComplexNumber complexNumber);
}





class Calc {
    @Getter
    @Setter
    private CN result;
    private final ArrayList<Action> history = new ArrayList<>();
}
class CN { // Комплексное число
    private double real; // реальное
    private double imaginary; // мнимое
    public CN(double real) {
        this(real, 0);
    }
    public CN(double real, double imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
}
class Action {
    static int count = 0;
    private final int id;
    private final char action;
    private final CN left;
    private final CN right;
    private final CN result;
    public Action(CN result) {
        this('=', null, null, result);
    }
    public Action(char action, CN left, CN right, CN result) {
        this.id = count++;
        this.action = action;
        this.left = left;
        this.right = right;
        this.result = result;
    }
    public void show() {
        if (this.action == '=') Console.out.log("CN(%s)\n", this.result);
        else Console.out.log("CN(%s) %c CN(%s) = CN(%s)\n", this.left, this.action, this.right, this.result);
    }
    public void showShort() {
        if (this.action == '=') System.out.printf("%1.2f\n", this.result);
        else System.out.printf("%c %1.2f\n", this.action, this.right);
    }
    public void showResult() {
        if (this.action == '=') System.out.printf("%1.2f\n", this.result);
        else System.out.printf("= %1.2f\n", this.result);
    }
}





class ComplexNumber implements Calculable {
    private double realNumber;
    private double imaginaryNumber;
    public ComplexNumber(double realNumber, double imaginaryNumber) {
        this.realNumber = realNumber;
        this.imaginaryNumber = imaginaryNumber;
    }
    public ComplexNumber() {
    }
    @Override
    public void addition(ComplexNumber complexNumber1, ComplexNumber complexNumber2) {
        setRealNumber(complexNumber1.getRealNumber() + complexNumber2.getRealNumber());
        setImaginaryNumber(complexNumber1.getImaginaryNumber() + complexNumber2.getImaginaryNumber());
    }
    @Override
    public void substraction(ComplexNumber complexNumber1, ComplexNumber complexNumber2) {
        setRealNumber(complexNumber1.getRealNumber() - complexNumber2.getRealNumber());
        setImaginaryNumber(complexNumber1.getImaginaryNumber() - complexNumber2.getImaginaryNumber());
    }
    @Override
    public void multiplication(ComplexNumber complexNumber1, ComplexNumber complexNumber2) {
        setRealNumber(complexNumber1.getRealNumber() * complexNumber2.getRealNumber() - complexNumber1.getImaginaryNumber() * complexNumber2.getImaginaryNumber());
        setImaginaryNumber(complexNumber1.getImaginaryNumber() * complexNumber2.getRealNumber() + complexNumber1.getRealNumber() * complexNumber2.getImaginaryNumber());
    }
    @Override
    public void division(ComplexNumber complexNumber1, ComplexNumber complexNumber2) {
        setRealNumber(
                (complexNumber1.getRealNumber() * complexNumber2.getRealNumber() +
                        complexNumber1.getImaginaryNumber() * complexNumber2.getImaginaryNumber()) /
                        (complexNumber2.getRealNumber() * complexNumber2.getRealNumber() +
                                complexNumber2.getImaginaryNumber() * complexNumber2.getImaginaryNumber())
        );
        setImaginaryNumber(
                (complexNumber1.getImaginaryNumber() * complexNumber2.getRealNumber() -
                        complexNumber1.getRealNumber() * complexNumber2.getImaginaryNumber()) /
                        (complexNumber2.getRealNumber() * complexNumber2.getRealNumber() +
                                complexNumber2.getImaginaryNumber() * complexNumber2.getImaginaryNumber())
        );
    }
    public double getRealNumber() {
        return realNumber;
    }
    public double getImaginaryNumber() {
        return imaginaryNumber;
    }

    public void setRealNumber(double realNumber) {
        this.realNumber = realNumber;
    }

    public void setImaginaryNumber(double imaginaryNumber) {
        this.imaginaryNumber = imaginaryNumber;
    }
}
class Log implements Logable {
    public Log(String message) {
        Console.out.log("Date: %s, Time: %s, Log for '%s' initialised.\n", LocalDate.now(), LocalTime.now(), message);
    }
    @Override
    public void print(String message) {
        Console.out.log("Date: %s, Time: %s, Log message: %s\n", LocalDate.now(), LocalTime.now(), message);
    }
}
class View implements Viewable {
    @Override
    public String stringComplexNumber(ComplexNumber complexNumber) {
        String realPart;
        String imagePart;
        String result;
        if (complexNumber.getRealNumber() != 0) realPart = "" + complexNumber.getRealNumber();
        else realPart = "";
        if (complexNumber.getImaginaryNumber() != 0) {
            if (complexNumber.getImaginaryNumber() > 0) {
                imagePart = "+" + complexNumber.getImaginaryNumber() + "i";
            }
            else imagePart = complexNumber.getImaginaryNumber() + "i";
        }
        else imagePart = "";
        result = realPart + imagePart;
        return result;
    }
}
@NoArgsConstructor
class Controller{
    public void init() {
        // создали логгер
        Log log = new Log("controller");
        // создали класс отображения комплексного числа
        View view = new View();

        // создали 3 числа и залогировали их
        ComplexNumber cn1 = new ComplexNumber(3,5);
        log.print("cn1 = " + view.stringComplexNumber(cn1) + " created");
        ComplexNumber cn2 = new ComplexNumber(4,6);
        log.print("cn2 = " + view.stringComplexNumber(cn2) + " created");
        ComplexNumber resCN = new ComplexNumber();
        log.print("resCN created");

        // провели математические операции над ними и отобразили результат
        // resCN.addition(cn1,cn2);
        // System.out.println(view.stringComplexNumber(cn1) + " + " + view.stringComplexNumber(cn2) + " = " +
        //         view.stringComplexNumber(resCN));
        // resCN.substraction(cn1,cn2);
        // System.out.println(view.stringComplexNumber(cn1) + " - " + view.stringComplexNumber(cn2) + " = " +
        //         view.stringComplexNumber(resCN));
        resCN.multiplication(cn1,cn2);
        System.out.println(view.stringComplexNumber(cn1) + " * " + view.stringComplexNumber(cn2) + " = " +
                view.stringComplexNumber(resCN));
        // resCN.division(cn1,cn2);
        // System.out.println(view.stringComplexNumber(cn1) + " / " + view.stringComplexNumber(cn2) + " = " +
        //         view.stringComplexNumber(resCN));
    }
}