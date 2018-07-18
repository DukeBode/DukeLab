# Shell 基础
# 1.创建文件 touch FileName
# 2.删除文件 rm [-i] FileName




# 当 python 解释器读取源文件时，会先定义一些特殊的变量，然后执行所有代码。
# 如 __name__

# 如果解释器运行的模块作为主程序，则 __name__ = __main__
# 如果只是被引入的模块，则 __name__ = 'Module_name'
if __name__ == "__main__":
    print('hello')
print(__name__)