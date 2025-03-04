﻿using func;

// 16. Напишите программу, которая принимает на
// вход два числа и проверяет, является ли одно
// число квадратом другого.
// 5, 25 -> да
// -4, 16 -> да
// 25, 5 -> да
// 8,9 -> нет

// -------------------------------------------------------------------

int num1 = rw.getInt("Введите 1-ое число");
int num2 = rw.getInt("Введите 2-ое число");

if (Math.Abs(num1) > Math.Abs(num2)) (num1, num2) = (num2, num1);
bool res = (Math.Pow(num1, 2) == num2);

rw.echo((res ? "Да" : "Нет") + $", Число {num2} " + (res ? "" : "не ") + $"является квадратом числа {num1}");

// -------------------------------------------------------------------