package lesson4.work;

class BoxWithNumber<T extends Number> {
    private final T[] item;

    @SafeVarargs
    public BoxWithNumber(T... item) {
        this.item = item;
    }

    public boolean compareAverage(BoxWithNumber<?> anotherItems) {
        return Math.abs(this.average() - anotherItems.average()) < 0.0001;
    }

    public double average() {
        double sum = 0;
        for (T t : this.item) {
            sum += t.doubleValue();
        }
        return sum / item.length;
    }
}
