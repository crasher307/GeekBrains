package lesson6.work.Warehouse;
import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // ArrayList<Product> myOrder = new ArrayList<>(List.of(
        //         new Product("Test product 1", 12, 20.50),
        //         new Product("Test product 2", 20, 70.20),
        //         new Product("Test product 3", 4, 120.50)
        // ));
        // var order = new Order(myOrder);
    }
}

interface ChangeWarehouse {
    public void addProduct(Product ... products);
    public void removeProduct(Product ... products);
    public void increaseProduct(Product product, int amount);
    public void decreaseProduct(Product product, int amount);
}

@AllArgsConstructor
class Warehouse implements ChangeWarehouse {
    List<Product> productList;
    public Warehouse() {
        var r = new Random();
        for (int i = 0; i < 5; i++) {
            productList.add(new Product("Test name" + i, r.nextInt(100), r.nextDouble(1000)));
        }
    }
    @Override
    public void addProduct(Product... products) {

    }
    @Override
    public void removeProduct(Product... products) {

    }
    @Override
    public void increaseProduct(Product product, int amount) {

    }
    @Override
    public void decreaseProduct(Product product, int amount) {

    }

    @Override
    public String toString() {
        StringBuilder response = new StringBuilder("Warehouse:\n");
        for (Product product : this.productList) {
            response.append(String.format("\t%s\n", product.toString()));
        }
        return response.toString();
    }
}

interface ChangeProduct {
    public void increaseCount(int amount);
    public void decreaseCount(int amount);
}

@AllArgsConstructor
class Product implements ChangeProduct {
    String name;
    int count;
    double price;
    public void increaseQuantity(int amount) {
        this.count++;
    }
    public void decreaseQuantity(int amount) {
        this.count--;
    }
    @Override
    public void increaseCount(int amount) {

    }
    @Override
    public void decreaseCount(int amount) {

    }
}

class Order implements ChangeProduct {
    private Warehouse warehouse;
    private ArrayList<Product> basket;

    public Order(Warehouse warehouse, ArrayList<Product> basket) {
        this.warehouse = warehouse;
        this.basket = basket;
    }

    @Override
    public void increaseCount(int amount) {

    }
    @Override
    public void decreaseCount(int amount) {

    }
}