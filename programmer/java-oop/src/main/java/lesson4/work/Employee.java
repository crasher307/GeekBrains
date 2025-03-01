package lesson4.work;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
class Employee {
    private String fio;
    private Double salary;
    private String jobTitle;
}
