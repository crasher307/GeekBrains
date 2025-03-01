package lesson4.homework;

import java.util.Scanner;
import lombok.*;

public class Main {
    public static void main(String[] args) {
        BinaryTree2 node = new BinaryTree2();
        Scanner scan = new Scanner(System.in);

        char ch;
        BinaryTree2.Node root = BinaryTree2.root;
        do {
            System.out.println("Введите целое число");
            root = node.insert(root, scan.nextInt());

            System.out.println("root = " + root.value);

            node.inorder(root, null);

            // System.out.printf("\n%s\n", root);

            System.out.println("\nВы хотите продолжить? (введите y или n)");
            ch = scan.next().charAt(0);
        } while (ch == 'Y' || ch == 'y');
    }
}

/**
 * Красно-черное дерево имеет следующие критерии:
 * • Каждая нода имеет цвет (красный или черный)
 * • Корень дерева всегда черный
 * • Новая нода всегда красная
 * • Красные ноды могут быть только левым ребенком
 * • У красной ноды все дети черного цвета
 *
 * Соответственно, чтобы данные условия выполнялись, после добавления элемента в дерево необходимо произвести балансировку, благодаря которой все критерии выше станут валидными.
 * Для балансировки существует 3 операции – левый малый поворот, правый малый поворот и смена цвета.
 */
class BinaryTree2 {
    static Node root = null;
    Node rotateLeft(Node node) {
        System.out.println("Поворот влево"); // против часовой

        Node child = node.right;
        Node childLeft = child.left;

        child.left = node;
        node.right = childLeft;

        return child;
    }
    Node rotateRight(Node node) {
        System.out.println("Поворот вправо"); // по часовой

        Node child = node.left;
        Node childRight = child.right;

        child.right = node;
        node.left = childRight;

        return child;
    }
    boolean isRed(Node node) {
        if (node == null) return false;
        return node.isRed;
    }
    void swapColors(Node first, Node second) {
        boolean tmp = first.isRed;
        first.isRed = second.isRed;
        second.isRed = tmp;

    }
    void recolor(Node node) {
        if (node == null) return;
        if (this.isRed(node)) {
            if (node.left != null) node.left.isRed = false;
            if (node.right != null) node.right.isRed = false;
        } else {
            if (node.left != null) node.left.isRed = true;
        }
        this.recolor(node.left);
        this.recolor(node.right);
    }
    // Node insert(Node node, int value) {
    //     if (node == null) return (new Node(value)).setRoot();
    //     if (node.value == value) return node;
    //     if (node.value > value) node.left = this.insert(node.left, value);
    //     if (node.value < value) node.right = this.insert(node.right, value);
    //     // правый - красный, левый - черный/не сущ.
    //     if (this.isRed(node.right) && !this.isRed(node.left)) node = this.rotateLeft(node);
    //     // левый и левый.левый - красный
    //     if (this.isRed(node.left) && this.isRed(node.left.left)) node = this.rotateRight(node);
    //     // перекраска
    //     this.recolor(root);
    //     return node;
    // }
    Node insert(Node myNode, int data) {
        // Обычный код вставки для любого двоичного файла
        if (myNode == null) {
            Node node = new Node(data);
            node.isRed = false;
            return node;
        }

        if (data < myNode.value) {
            myNode.left = insert(myNode.left, data);
        } else if (data > myNode.value) {
            myNode.right = insert(myNode.right, data);
        } else {
            return myNode;
        }

        // случай 1.
        // когда правый дочерний элемент красный, а левый дочерний элемент черный или не
        // существует.
        if (this.isRed(myNode.right) && !this.isRed(myNode.left)) {
            // Повернуть узел влево
            myNode = rotateLeft(myNode);
        }

        // случай 2
        // когда левый ребенок, а также левый внук выделены красным цветом
        if (this.isRed(myNode.left) && this.isRed(myNode.left.left)) {
            // Повернуть узел в право
            myNode = rotateRight(myNode);
        }

        // перекраска
        recolor(root);

        return myNode;
    }

    // Обход по порядку
    // void inorder(Node node, Node parent) {
    //     if (node != null) {
    //         inorder(node.left, node);
    //         String color = node.isRed ? "_R" : "_B";
    //         if (parent != null) System.out.print(parent.value + " -> " + node.value + "" + color + " ");
    //         else System.out.print(node.value + "" + color + " ");
    //
    //         inorder(node.right, node);
    //     }
    // }
    void inorder(Node node, Node parent) {
        if (node != null) {
            inorder(node.left, node);
            String c = "_R";
            if (!node.isRed) c = "_B";
            if (parent != null) System.out.print(parent.value + " -> " + node.value + "" + c + " ");
            else System.out.print(node.value + "" + c + " ");

            inorder(node.right, node);
        }
    }



    // public Node add(Node node, int value) {
    //     if (node == null) {
    //         node = new Node(value);
    //         if (this.root == null) this.root = node.setRoot();
    //     } else {
    //         if (value < node.value) node.left = this.add(node.left, value);
    //         if (value > node.value) node.right = this.add(node.right, value);
    //     }
    //     return this.last = node;
    // }
    // public Node add(int value) {
    //     return this.add(this.last, value);
    // }
    // public Node add(Node node, int value) {
    //     // Красно-черное дерево имеет следующие критерии:
    //     // • Каждая нода имеет цвет (красный или черный)
    //     // • Корень дерева всегда черный
    //     // • Новая нода всегда красная
    //     // • Красные ноды могут быть только левым ребенком
    //     // • У краной ноды все дети черного цвета
    //     //
    //     // Соответственно, чтобы данные условия выполнялись, после добавления элемента в дерево необходимо произвести
    //     // балансировку, благодаря которой все критерии выше станут валидными. Для балансировки существует 3 операции
    //     // – левый малый поворот, правый малый поворот и смена цвета.
    //
    //
    //
    //
    //     if (node == null) {
    //         node = new Node(value);
    //         if (this.root == null) {
    //             this.root = node;
    //         }
    //     } else {
    //         if (value < node.value) node.left = this.add(node.left, value);
    //         if (value > node.value) node.right = this.add(node.right, value);
    //     }
    //     return node;
    // }

    private void print(Node node){
        if(node == null) return;
        System.out.println(node);
    }
    public void print(){
        print(this.root);
    }

    public static class Node {
        public int value;
        public boolean isRed;
        public Node left, right;

        public Node(int value) {
            this.value = value;
            this.isRed = true;
            this.left = null;
            this.right = null;
        }
        public Node setRoot() {
            this.isRed = false;
            return this;
        }


        private String view(int countTab) {
            String tab = countTab <= 0 ? "" : String.format("%" + countTab + "s", "").replace(" ", "|\t");
            return String.format(
                    "%s%s\n\t%sleft: %s\n\t%sright: %s",
                    this.value, this.isRed ? "_RED" : "_BLACK",
                    tab, this.left == null ? null : this.left.view(countTab + 1),
                    tab, this.right == null ? null : this.right.view(countTab + 1)
            );
        }
        public String toString() {
            return this.view(0);
        }
    }
}