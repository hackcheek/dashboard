from typing import Union


class Plot:
    
    def __init__(
        self, 
        plot_id: Union[str, int]
    ): 
        self.plot_id = plot_id


    @classmethod
    def set_over(cls, obj: str):
        cls.func
        pass


    @classmethod
    def set_under(cls, obj: str):
        pass
       
    @classmethod
    def set_right(cls, obj: str):
        return cls.func + obj

    @classmethod
    def set_left(cls, obj: str):
        return obj + cls.func


def show(letter: str):
    return f' {letter} '


Plot(show('A'))
