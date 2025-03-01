using func;

string[] strLen3(string[] array) {
    string[] result = new string[array.Length];
    int key = 0;
    foreach (string value in array) {
        if (value.Length <= 3) result[key++] = value;
    }
    Array.Resize(ref result, key);
    return result;
}

rw.echo("1 - тестовый массив\n2 - ввод массива вручную");

string type = rw.getStr("Ввод");
string[] basicArray, resultArray;

switch (type) {
    default:
        basicArray = new string[0];
        break;
    case "1":
        basicArray = new string[] {"hello", "2", "world", ":-)"};
        break;
    case "2":
        basicArray = new string[rw.getInt("Введите кол-во элементов", true)];
        for (int i = 0; i < basicArray.Length; i++) basicArray[i] = rw.getStr();
        break;
}
if (basicArray.Length > 0) {
    resultArray = strLen3(basicArray);
    rw.echo($"Стартовый\t{basicArray.Length} эл\t", false, "get");
    rw.echo($"\"{String.Join("\", \"", basicArray)}\"");
    rw.echo($"Итоговый\t{resultArray.Length} эл\t", false, "get");
    rw.echo($"\"{String.Join("\", \"", resultArray)}\"");
}