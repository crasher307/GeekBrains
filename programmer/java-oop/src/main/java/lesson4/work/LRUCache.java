package lesson4.work;

import java.util.ArrayList;

class LRUCache<T> {
    private final int size; // cache buffer
    private final ArrayList<T> items = new ArrayList<>();

    public LRUCache(int size) {
        this.size = size;
    }

    public void addElement(T item) {
        if (items.size() >= this.size) items.remove(0);
        items.add(item);
    }

    public T getElement(int idx) {
        return items.get(idx);
    }

    public ArrayList<T> getAllElement() {
        return items;
    }
}
