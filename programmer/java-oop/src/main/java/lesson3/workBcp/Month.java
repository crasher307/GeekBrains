package lesson3.workBcp;

public enum Month {
    JAN(1), FEB(2), MAR(3), APR(4), MAY(5), JUN(6),
    JUL(7), AUG(8), SEP(9), OCT(10), NOV(11), DEC(12);

    int index;

    Month(int index) {
        this.index = index;
    }

    Month() {
    }

    public int getIndex() {
        return index;
    }
}
