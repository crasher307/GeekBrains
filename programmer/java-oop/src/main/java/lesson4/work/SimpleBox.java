package lesson4.work;

import lombok.Data;

@Data
class SimpleBox {
    private Object myObject;

    public SimpleBox(Object myObject) {
        this.myObject = myObject;
    }
}
