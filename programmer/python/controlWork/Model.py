class Model:
    id = -1
    title = ''
    body = ''
    update = ''

    def __init__(self, idx=None, title=None, body=None, update=None):
        self.id = idx
        self.title = title
        self.body = body
        self.update = update

    def upd(self, name, value):
        print(f'UPD: {name} = {value}')
        self.__setattr__(name, value)

    # def get(self, name):
    #     return self.get(name)

    # def set(self, name, value):
    #     self.set(name, value)
