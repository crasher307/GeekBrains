from datetime import datetime
from Model import Model


# class fileUsage:
#     __encoding = 'cp1251'
#     __dir = os.getcwd().replace('\\', '/') + '/files/'
#
#     def load(self, file):
#         try:
#             with open(f'{self.__dir}{file}', 'r', encoding=self.__encoding) as f:
#                 data = f.read()
#             return data
#         except Exception as error:
#             raise Exception(error)
#
#     def save(self, file, data):
#         try:
#             if not data:
#                 raise Exception('Отсутствуют данные для записи')
#             with open(f'{self.__dir}{file}', 'w', encoding=self.__encoding) as f:
#                 f.write(data)
#             return True
#         except Exception as error:
#             raise Exception(error)
#
# class dataObj(object):
#     def __init__(self, idx, data):
#         self.idx = idx
#         self.__keys = []
#         self.__values = []
#         for key in data:
#             self.__setattr__(key, data[key])
#             self.__keys.append(key)
#             self.__values.append(data[key])
#
#     def keys(self):
#         return ['idx'] + self.__keys
#
#     def values(self):
#         return [self.idx] + self.__values
#
#     def id(self):
#         return self.idx
#
#     def get(self, key):
#         return self.__getattribute__(key)
#
#     def set(self, key, value):
#         if key == 'idx':
#             return
#         __key = list(filter(lambda x: x is not None, [k if v == key else None for k, v in enumerate(self.__keys)]))[0]
#         self.__values[__key] = value
#         self.__setattr__(key, value)
#
# class dataHandler:
#     __format = {
#         'csv': {  # format
#             'row': '\n',  # row_separator
#             'field': ';'  # field_separator
#         },
#         'txt': {
#             'row': '\n',
#             'field': '--'
#         }
#     }
#
#     __lastIdx = 0
#     __keys = None
#
#     # __model = None
#
#     def __assoc(self, k, v):
#         return {d[0]: d[1] for d in list(filter(lambda x: x[0] is not None, zip(k, v)))}
#
#     def model(self):
#         self.__lastIdx += 1
#         return dataObj(self.__lastIdx, self.__assoc(self.__keys, ['' for i in self.__keys]))
#
#     # file to [dataObj(), ...]
#     def text_to_data(self, data, f):  # Вычитка данных в массив объектов
#         try:
#             __format = self.__format[f]
#             __row = __format['row']
#             __field = __format['field']
#
#             __items = data.strip(__row).split(__row)
#             __keys = [__key if __key else None for __key in __items[0].split(__field)]
#             __data = [self.__assoc(__keys, __values) for __values in [__item.split(__field) for __item in __items[1::]]]
#
#             __response = [dataObj(__idx, __record) for __idx, __record in enumerate(__data)]
#             self.__keys = __keys
#             self.__lastIdx = __response[-1].id()
#
#             return __response
#         except Exception as __error:
#             raise Exception(__error)
#
#     # [dataObj(), ...] to file
#     def data_to_text(self, data, f):  # Преобразование массива объектов в формат для записи (def: CSV)
#         try:
#             __format = self.__format[f]
#             __row = __format['row']
#             __field = __format['field']
#
#             __data = [data[0].keys()] + [__item.values() for __item in data]
#             __data = __row.join([__field.join(list(map(str, __item))) for __item in __data])
#             __data += '\n'
#
#             return __data
#         except Exception as __error:
#             raise Exception(__error)

#  Заметка должна
# содержать идентификатор, заголовок, тело заметки и дату/время создания или
# последнего изменения заметки
class Note:
    __data = []
    __idx = None
    __title = None
    __body = None
    __update = None
    def __init__(self, idx, title, body, update=None):
        self.__idx = idx
        self.__title = title
        self.__body = body
        self.__update = self.stamp() if update is None else update
    def getIdx(self):
        return self.__idx
    def getTitle(self):
        return self.__title
    def getBody(self):
        return self.__body
    def getUpdate(self):
        return self.__update
    def add(self, idx, title, body, update=None):
        self.sort()
        __lastIdx = self.__data[-1]

        self.__data.append(Note(idx, title, body, self.stamp() if update is None else update))
    def update(self, idx, title=None, body=None):
        try:
            pass
        except Exception as __err:
            print(__err)
    def stamp(self):
        return datetime.strftime(datetime.today(), '%Y-%m-%d %H:%M:%S.%f')[:23]
    def sort(self):
        self.__data.sort(key=Note.getUpdate)

class Notes:
    __lastIdx = 0
    __data = {}
    __file = 'notes.csv'

    def __init__(self):
        pass

    # Отображение меню
    def menu(self):
        pass

    # Загрузка заметок
    def load(self):
        pass

    # Сохранение заметок
    def save(self):
        pass

    # Отображение списка заметок
    def list(self):
        pass

    # Отображение заметки
    def view(self):
        pass

    # Редактирование заметки
    def edit(self):
        pass

    # Удаление заметки
    def remove(self):
        pass



class Note:
    idx = 0
    data = []
    __file = 'notes.csv'

    # def __init__(self, title=None, body=None, update=None):
    #     if None in [title, body]:
    #         return
    #
    #     self.__id = self.idx
    #     self.__title = title
    #     self.__body = body
    #     self.__update = update
    #     Note.idx += 1

    def show_menu(self):
        self.view_list()
        __menu = [
            {
                'name': 'Отобразить',
                'func': lambda: self.view()
            },
            {
                'name': 'Создать',
                'func': lambda: self.create()
            },
            {
                'name': 'Редактировать',
                'func': lambda: self.edit()
            },
            {
                'name': 'Удалить',
                'func': lambda: self.remove()
            }
        ]
        __actions = ' | '.join([f'{i} - {item.get("name")}' for i, item in enumerate(__menu)])
        __action = int(input(f'Выберите действие [ {__actions} ]: '))
        [item.get('func')() if __action == i else None for i, item in enumerate(__menu)]

    def load(self):
        try:
            with open(self.__file, 'r', encoding='cp1251') as __f:
                __data = __f.read()
            __data = list(filter(lambda x: x != '', __data.split('\n')))

            __keys = __data.pop(0).split(';')
            __values = [item.split(';') for item in __data]

            __max_idx = 0
            for __obj in __values:
                __data_obj = Model()
                for __i, __item in enumerate(__keys):
                    print('KEY:', __item, ' -- ', __obj[__i])
                    __data_obj.upd(f'{__item}', __obj[__i])
                    if __item == 'id':
                        __max_idx = int(__obj[__i]) if int(__obj[__i]) > __max_idx else __max_idx
                self.data.append(__data_obj)

            # self.idx = __max_idx + 1

            # print(f'keys: {__keys}')
            # print(f'values: {__values}')

            # [print('keys:' + item) for item in __keys]
            # [print('values:' + item) for item in __values]

            # print(f'TEST: {__data}')
        except Exception as error:
            raise Exception(error)

    # def save(self, file, data):
    #     try:
    #         if not data:
    #             raise Exception('Отсутствуют данные для записи')
    #         with open('notes.csv', 'w', encoding='cp1251') as f:
    #             f.write(data)
    #         return True
    #     except Exception as error:
    #         raise Exception(error)

    # Create/Update/Remove
    def change(self, idx=None, title=None, body=None):
        if idx is None and None in [title, body]:
            return False
        try:  # Change data
            __data = None if idx is None else list(filter(lambda item: idx == item.id, self.data))[0]
            if __data is None:  # Create
                self.data.append(Model(self.idx, title, body, self.stamp()))
                self.idx += 1
            elif None not in [title, body]:  # Update
                __data.title = title
                __data.body = body
                __data.update = self.stamp()
            else:  # Remove
                Note.data.remove(__data)
        except IndexError:  # Error
            print('Заметка не найдена')
            return False
        except Exception as __err:  # Error
            print(f'Error: {__err}')
            return False
        self.sort()
        return True

    def view_list(self):
        try:
            self.load()
            print(
                f'{"-_ID_заметки_-":14s} | {"-_Заголовок_-":40s} | {"-_Дата_обновления_-"}'
                .replace(' ', '-')
                .replace('-|-', ' | ')
                .replace('_', ' ')
                .ljust(120, '-')
            )
            [print(f'{item.id:14d} | {item.title:40s} | {item.update}') for item in self.data]
            print(''.ljust(120, '-'))
        except Exception as __err:
            print(f'Error: {__err}')

    # User func

    def view(self, idx=None, is_edit=False):
        try:
            self.load()
            __idx = int(input('Введите ID заметки: ')) if idx is None else idx
            __data = list(filter(lambda item: idx == item.id, self.data))[0]
            __fields = {
                'Заголовок': __data.title,
                'Заметка': __data.body,
                'Изменено': __data.update
            }
            print()
            print(f'Заметка #{__idx}')
            [print(f'{item:16} {__fields[item]}') for item in __fields]
            print()
        except IndexError as __err:
            print('Заметка не найдена')
            if is_edit:
                return 'N'
        except Exception as __err:
            print(f'Error: {__err}')
        if not is_edit:
            input('Нажмите ENTER чтобы продолжить')
            print()

    # def create(self, title=None, body=None, update=None):
    #     print('--- Создание заметки ---')
    #     __title = str(input('Введите заголовок: ')) if title is None else title
    #     __body = str(input('Введите заметку: ')) if body is None else body
    #     return self.change(title=__title, body=__body, update=update)
    #
    # def edit(self, idx=None, title=None, body=None, update=None):
    #     print('--- Редактирование заметки ---')
    #     __idx = int(input('Введите ID заметки: ')) if idx is None else idx
    #     __next = self.view(__idx, is_edit=True)
    #     while not self.is_bool(__next):
    #         __next = input('Продолжить редактирование (Y/N): ')
    #         print()
    #     if self.bool_val(__next):
    #         __title = str(input('Введите новый заголовок: ')) if title is None else title
    #         __body = str(input('Введите новый текст: ')) if body is None else body
    #         return self.change(idx=__idx, title=__title, body=__body, update=update)
    #     else:
    #         return False
    #
    # def remove(self, idx=None):
    #     print('--- Удаление заметки ---')
    #     __idx = int(input('Введите ID заметки: ')) if idx is None else idx
    #     return self.change(idx=__idx)

    # Service

    __bool_val_arr = {
        True: ['1', 'Y', 'y', 'Yes', 'yes', 'Д', 'д', 'Да', 'да'],
        False: ['0', 'N', 'n', 'No', 'no', 'Н', 'н', 'Нет', 'нет']
    }

    def is_bool(self, x):
        return True in [x in self.__bool_val_arr[__item] for __item in self.__bool_val_arr]

    def bool_val(self, x):
        return True if x in self.__bool_val_arr[True] else False

    def get_update(self):
        return self.__update

    def sort(self):
        self.data.sort(key=Note.get_update)

    def stamp(self):
        return datetime.strftime(datetime.today(), '%Y-%m-%d %H:%M:%S.%f')[:23]


note = Note()
# note.load()
# note.create('test title', 'test body')
# note.create('test title 2', 'test body 2')
# note.create('test title 10', 'test body', '2022-12-12 20:00:00')
# note.create('test title 13', 'test body', '2022-12-10 20:00:00')
# note.save()
while True:
    note.show_menu()

# [print(item.view) for item in note.data]
# note.view_list()
# note.view_all()
# note.view(1)

# Note.create()

# test = Note('test', 'test2')
# print(test.view())
